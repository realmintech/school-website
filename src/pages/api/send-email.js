// pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, phoneNumber, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: "Al-hikmohmontessooriacademy@gmail.com",
        subject: `New message from ${fullName}`,
        text: `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
