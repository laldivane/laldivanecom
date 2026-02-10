import { NextRequest, NextResponse } from "next/server";

// Contact form submission handler
// Uses Web3Forms for email delivery (free tier: 250 emails/month)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tüm alanlar zorunludur" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir email adresi giriniz" },
        { status: 400 }
      );
    }

    // For now, we'll log the submission
    // In production, integrate with Web3Forms, SendGrid, or similar service
    console.log("Contact form submission:", { name, email, message });

    // Simulate email sending (replace with actual service integration)
    // Example with Web3Forms:
    // const response = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     access_key: process.env.WEB3FORMS_ACCESS_KEY,
    //     name,
    //     email,
    //     message,
    //     subject: `Lal Divane Contact: ${name}`,
    //   }),
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: "Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
