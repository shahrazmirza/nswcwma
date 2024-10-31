import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(req, res) {
  console.log("Data", req.body);

  const { name, email, phone, address, DOB } = req.body;

  const API_KEY = process.env.MAILGUN_API_KEY || "";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "";

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: "Membership Application Form <info@nswcwma.org.au>",
    to: "info@nswcwma.org.au",
    subject: "Membership Application Form",
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}
     Date of Birth: ${DOB}
    `,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
  } catch (err) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
