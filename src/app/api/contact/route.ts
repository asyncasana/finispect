import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {

  function capitaliseName(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

  const { name, email, message, propertyType } = await req.json();
  const formattedName = capitaliseName(name);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_TO,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nProperty Type: ${propertyType}\nMessage: ${message}`,
    html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="background-color: #1e3a8a; padding: 20px;">
        <h2 style="margin: 0; color: #ffffff; font-size: 20px;">New Contact Form Submission</h2>
      </div>
      <div style="padding: 20px;">
        <p style="font-size: 16px; color: #111827;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px; color: #111827;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1e3a8a;">${email}</a></p>
        ${
          propertyType
            ? `<p style="font-size: 16px; color: #111827;"><strong>Property Type:</strong> ${propertyType}</p>`
            : ""
        }
        ${
          message
            ? `<p style="font-size: 16px; color: #111827;"><strong>Message:</strong></p>
               <blockquote style="margin: 10px 0; padding: 10px; background: #f1f5f9; border-left: 4px solid #1e3a8a;">
                 <p style="margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
               </blockquote>`
            : "<p style='font-size: 16px; color: #6b7280;'><em>No message provided.</em></p>"
        }
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size: 12px; color: #6b7280; text-align: center;">
          Sent from the contact form on <a href="https://finispect.co.uk" style="color: #1e3a8a; text-decoration: none;">finispect.co.uk</a>
        </p>
      </div>
    </div>
  </div>
`,
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Thanks for contacting Finispect!",
    text: `Hi ${formattedName},\n\nThanks for reaching out! We’ve received your message and will get back to you within 24 hours.\n\nBest,\nThe Finispect Team`,
    html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="background-color: #1e3a8a; padding: 20px;">
        <h2 style="margin: 0; color: #ffffff; font-size: 20px;">Finispect</h2>
      </div>
      <div style="padding: 20px;">
        <p style="font-size: 16px; color: #111827;">Hi ${formattedName},</p>
        <p style="font-size: 16px; color: #111827;">
          Thanks for getting in touch with <strong>Finispect</strong>! We've received your enquiry and will aim to be in contact within 24 hours.
        </p>
        ${
          message
            ? `<p style="font-size: 16px; color: #111827;">Here’s a copy of your message:</p>
               <blockquote style="margin: 10px 0; padding: 10px; background: #f1f5f9; border-left: 4px solid #1e3a8a;">
                 <p style="margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
               </blockquote>`
            : ""
        }
        <p style="font-size: 16px; color: #111827;">Best regards,</p>
        <p style="font-size: 16px; color: #111827;">The Finispect Team</p>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size: 12px; color: #6b7280; text-align: center;">
          This message was sent from <a href="https://finispect.co.uk" style="color: #1e3a8a; text-decoration: none;">finispect.co.uk</a>
        </p>
      </div>
    </div>
  </div>
`,
  });

  return NextResponse.json({ success: true });
}
