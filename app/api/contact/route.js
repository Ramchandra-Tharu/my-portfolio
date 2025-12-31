import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req) {
    const { name, email, phone, message } = await req.json();

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // you will receive email
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Failed to send message." });
    }
}
