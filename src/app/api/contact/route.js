import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json(); // Get data from form

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email (sender)
        pass: process.env.EMAIL_PASS, // Use App Password if using Gmail
      },
    });

    // 1️⃣ **Send Thank You Email to the User**
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send to the user
      subject: `Thank You for Contacting Me, ${name}!`,
      text: `Hello ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\n"\n\nBest Regards,\nNaveen`,
    };

    await transporter.sendMail(userMailOptions);

    // 2️⃣ **Send User's Message to You (Admin)**
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself (admin)
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from your contact form:\n\nName : ${name}\nEmail : ${email}\nMessage :\n"${message}"`,
    };

    await transporter.sendMail(adminMailOptions);

    return new Response(JSON.stringify({ success: true, message: "Emails sent successfully!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Failed to send email", error }), { status: 500 });
  }
}
