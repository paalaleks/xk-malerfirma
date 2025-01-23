"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify connection configuration
transporter.verify(function (error) {
  if (error) {
    console.log("SMTP connection error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export async function sendEmail(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const data = formSchema.parse(rawData);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "post@xkmalerfirma.no",
      subject: `Ny henvendelse fra ${data.name}`,
      text: `
Navn: ${data.name}
E-post: ${data.email}

Melding:
${data.message}
      `,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: String(error) };
  }
}
