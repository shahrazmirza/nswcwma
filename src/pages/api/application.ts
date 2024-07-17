import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(req, res) {
  console.log("Data", req.body);

  const {
    name,
    email,
    phone,
    address,
    message,
    marketing,
    specialNeeds,
    emergencyContactName,
    emergencyContactPhone,
    emergencyContactRelationship,
  } = req.body;

  const API_KEY = process.env.MAILGUN_API_KEY || "";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "";

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: "Application Form <info@nswcwma.org.au>",
    to: "info@nswcwma.org.au",
    subject: "Assistance Application Form",
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}
    Please briefly describe your current situation and why you are seeking assistance: ${message}
    How did you hear about NSWCWMA services? ${marketing}
    Do you have any specific needs or requests? ${specialNeeds}
    Emergency Contact Name: ${emergencyContactName}
    Emergency Contact Phone: ${emergencyContactPhone}
    Emergency Contact Relationship: ${emergencyContactRelationship}
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
