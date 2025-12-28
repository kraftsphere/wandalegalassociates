import nodemailer from "nodemailer";

// Configure Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req) {
  if (req.method !== "POST") {
    return Response.json(
      { error: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Confirmation: We received your message`,
      text: `Hi ${name},\n\nThank you for reaching out to us. We have received your inquiry and will get back to you soon.\n\nBest regards,\nW and A Legal Associates`,
    };

    // Email to company (inquiry)
    const companyMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Enquiry: ${subject}`,
      text: `You have received a new inquiry from your contact form.\n\nDetails:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nThis is an automated email from your website contact form.`,
    };

    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(companyMailOptions);

    return Response.json(
      { success: true, message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return Response.json(
      { error: "Failed to send email: " + error.message },
      { status: 500 }
    );
  }
}
