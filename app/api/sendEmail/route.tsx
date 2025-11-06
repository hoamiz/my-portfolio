import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { name, email, message } = json;

    const { data, error } = await resend.emails.send({
      from: "Your Website <no-reply@resend.dev>",
      to: "leson11081997@gmail.com",
      subject: `New message from ${name}`,
      react: <EmailTemplate name={name} email={email} message={message} />,

    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
  }
}
