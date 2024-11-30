import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import formData from "form-data";
import Mailgun from "mailgun.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Set up multer with memory storage
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB limit
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error("Invalid file type. Only PDF and Word documents are allowed.")
      );
    }
  },
}).fields([
  { name: "resume", maxCount: 1 },
  { name: "coverLetter", maxCount: 1 },
]);

// Helper function to run middleware
function runMiddleware(req: any, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (err: any) => {
      if (err) return reject(err);
      resolve(null);
    });
  });
}

// Main handler function
export default async function handler(req: any, res: NextApiResponse) {
  try {
    // Run the multer middleware to parse form data
    await runMiddleware(req, res, upload);

    const { name, email, phone, address, DOB } = req.body;
    const resumeFile = req.files["resume"] ? req.files["resume"][0] : null;
    const coverLetterFile = req.files["coverLetter"]
      ? req.files["coverLetter"][0]
      : null;

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !DOB ||
      !resumeFile ||
      !coverLetterFile
    ) {
      res.status(400).json({ error: "Missing required fields or files" });
      return;
    }

    const API_KEY = process.env.MAILGUN_API_KEY || "";
    const DOMAIN = process.env.MAILGUN_DOMAIN || "";

    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: "api", key: API_KEY });

    const attachments = [
      {
        filename: resumeFile.originalname,
        data: resumeFile.buffer,
      },
      {
        filename: coverLetterFile.originalname,
        data: coverLetterFile.buffer,
      },
    ];

    const messageData = {
      from: "Job Application <info@nswcwma.org.au>",
      to: "info@nswcwma.org.au",
      subject: "Job Application Received",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Date of Birth: ${DOB}
      `,
      attachment: attachments,
    };

    try {
      const emailRes = await client.messages.create(DOMAIN, messageData);
      console.log("Email sent:", emailRes);
      res.status(200).json({ submitted: true });
    } catch (err) {
      console.error("Error sending email", err);
      res.status(500).json({ error: "Error sending email" });
    }
  } catch (err) {
    console.error("Error processing request", err);

    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        res
          .status(400)
          .json({ error: "File size too large. Maximum allowed size is 1MB." });
      } else {
        res.status(400).json({ error: err.message });
      }
    } else if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Error processing request" });
    }
  }
}
