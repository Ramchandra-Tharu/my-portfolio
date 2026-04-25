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

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.error("Transporter Verification Error:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

export async function POST(req) {
    try {
        const { name, email, phone, message } = await req.json();
        console.log("Received contact form submission:", { name, email });

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json({ 
                success: false, 
                message: "Please provide all required fields (name, email, message)." 
            }, { status: 400 });
        }

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`, // Best practice for Gmail
            to: process.env.EMAIL_USER,
            replyTo: email, // Allows direct reply to the sender
            subject: `🚀 Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; border-radius: 12px; overflow: hidden; border: 1px solid #e0e0e0;">
                    <div style="background-color: #0891b2; padding: 24px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Portfolio Inquiry</h1>
                    </div>
                    <div style="padding: 32px; background-color: #ffffff;">
                        <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">You have received a new message from your portfolio contact form.</p>
                        
                        <div style="margin-top: 24px; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px 0; font-weight: bold; color: #1f2937; width: 100px;">Name:</td>
                                    <td style="padding: 8px 0; color: #4b5563;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; font-weight: bold; color: #1f2937;">Email:</td>
                                    <td style="padding: 8px 0; color: #0891b2;"><a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; font-weight: bold; color: #1f2937;">Phone:</td>
                                    <td style="padding: 8px 0; color: #4b5563;">${phone || 'Not provided'}</td>
                                </tr>
                            </table>
                        </div>

                        <div style="margin-top: 32px;">
                            <h3 style="color: #1f2937; margin-bottom: 12px; border-bottom: 2px solid #0891b2; display: inline-block; padding-bottom: 4px;">Message:</h3>
                            <div style="padding: 16px; background-color: #ffffff; border-left: 4px solid #0891b2; color: #374151; font-style: italic; line-height: 1.8; font-size: 15px;">
                                "${message}"
                            </div>
                        </div>
                    </div>
                    <div style="background-color: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb;">
                        <p style="font-size: 12px; color: #9ca3af; margin: 0;">Sent via Your Portfolio Website Contact Form</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ 
            success: false, 
            message: "Failed to send message. Please try again later." 
        }, { status: 500 });
    }
}
