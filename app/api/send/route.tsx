import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { EmailTemplate } from "@/src/components/EmailTemplate";

const FROM_EMAIL = "onboarding@resend.dev";
const TO_EMAIL = "enzothome1@gmail.com";

type AnswerItem = {
  question: string;
  answer: string;
};

type SendRequestBody = {
  email?: string;
  userEmail?: string;
  category?: string;
  answers?: AnswerItem[];
};

function getErrorDetails(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    return error;
  }

  return String(error);
}

function isValidAnswers(value: unknown): value is AnswerItem[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        typeof item.question === "string" &&
        typeof item.answer === "string"
    )
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  console.log("--- API DEBUG: Verificando Key... ---");
  console.log(
    "API KEY CARGADA:",
    apiKey ? `SI (Inicia con: ${apiKey.substring(0, 7)})` : "NO"
  );

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing in /api/send");
    return NextResponse.json(
      {
        error: true,
        message: "Email service is not configured.",
        details: "Missing RESEND_API_KEY",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  let body: SendRequestBody;

  try {
    body = await request.json();
    console.log("Receiving onboarding request for:", body.email || body.userEmail);
  } catch (error) {
    console.error("Invalid /api/send request body", error);
    return NextResponse.json(
      {
        error: true,
        message: "Invalid request body",
        details: getErrorDetails(error),
      },
      { status: 400 }
    );
  }

  const email =
    typeof body.email === "string"
      ? body.email.trim()
      : typeof body.userEmail === "string"
        ? body.userEmail.trim()
        : "";

  const category = typeof body.category === "string" ? body.category.trim() : "";
  const answers = body.answers;

  if (!email || !category || !isValidAnswers(answers)) {
    console.error("Invalid /api/send payload", { email, category, answers });
    return NextResponse.json(
      {
        error: true,
        message: "Expected body: { email, category, answers }",
        details: { email, category, answers },
      },
      { status: 400 }
    );
  }

  const emailTemplate = (
    <EmailTemplate userEmail={email} category={category} answers={answers} />
  );

  try {
    const emailHtml = await render(emailTemplate);

    console.log(
      "INTENTANDO ENVIAR A RESEND CON:",
      JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Lead onboarding | ${category} | ${email}`,
      })
    );

    const { data, error } = await resend.emails.send({
      from: `Diagn\u00f3stico <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `Lead onboarding | ${category} | ${email}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend rejected /api/send", error);
      return NextResponse.json(
        {
          error: true,
          message: error.message || "Resend rejected the email request.",
          details: getErrorDetails(error),
        },
        { status: 502 }
      );
    }

    console.log("Email sent successfully to:", TO_EMAIL);
    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (error) {
    console.error("Unhandled /api/send error", error);
    return NextResponse.json(
      {
        error: true,
        message: error instanceof Error ? error.message : "Unknown email error.",
        details: getErrorDetails(error),
      },
      { status: 500 }
    );
  }
}
