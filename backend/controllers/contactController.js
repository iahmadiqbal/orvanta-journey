const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const submitContact = async (req, res) => {
  const { name, email, phone, address, desiredCountry, visaType, message } =
    req.body;

  try {
    // 1. Save to MongoDB first
    const newContact = new Contact({
      name,
      email,
      phone,
      address,
      desiredCountry,
      visaType,
      message,
    });
    await newContact.save();
    console.log("✅ Contact saved to MongoDB");

    // 2. Try to send email notification (non-blocking)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `📩 New Consultation Request from ${name}`,
        html: `
          <h2 style="color:#f59e0b">New Contact Form Submission — Orvanta Advisory</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address || "Not provided"}</p>
          <p><strong>Desired Country:</strong> ${desiredCountry}</p>
          <p><strong>Visa Type:</strong> ${visaType}</p>
          <p><strong>Message:</strong> ${message || "No message provided"}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `,
      });
      console.log("✅ Email sent successfully");
    } catch (emailError) {
      console.error("⚠️ Email failed but data was saved:", emailError.message);
    }

    // Always return success if data was saved to MongoDB
    res.status(200).json({
      success: true,
      message:
        "Your message has been received! We will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("❌ Error in submitContact:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = { submitContact };
