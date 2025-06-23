// /app/api/contact/route.ts
import { NextResponse } from "next/server";

const logo_url = "https://www.mandytremelling.com/logo.webp";

export async function POST(req: Request) {
  const form = await req.json();
  if (!form.email || !form.first_name) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // const to12Hour = (timeStr: string) => {
  //   return new Date(`1970-01-01T${timeStr}:00Z`).toLocaleTimeString("en-US", {
  //     hour: "numeric",
  //     minute: "2-digit",
  //     hour12: true,
  //     timeZone: "UTC", // prevent local timezone offset
  //   });
  // };

  // const time = to12Hour(form.time as string);

  const toEmails = [
    {
      email: process.env.BREVO_RECEIVER_EMAIL!,
      name: process.env.BREVO_RECEIVER!,
    },
  ];

  let subject = "New Mailing List Request";
  let htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0;padding:0;background-color:#F5F5F5;">
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
    >
      <div style="
      display: none !important;
      visibility: hidden;
      mso-hide: all;
      font-size: 1px;
      line-height: 1px;
      max-height: 0;
      max-width: 0;
      opacity: 0;
      overflow: hidden;
    ">
        New referral from ${form.referrer}
      </div>
      <tr>
        <td align="center">
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="background-color:#FFFFFF;"
          >
            <tr>
              <td align="center" style="background-color:#1A1A2E;padding:20px;">
                <a href="https://www.mandytremelling.com">
                  <img
                    src=${logo_url}
                    alt="Mandy Tremelling logo"
                    width="150"
                    style="display:block;border:0;outline:none;text-decoration:none;"
                  >
                </a>
              </td>
            </tr>
            <tr>
              <td style="background-color:#607D8B;height:4px;line-height:4px;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:30px 30px 10px;text-align:left;">
                <h2 style="margin:0;font-family:Arial,sans-serif;font-size:24px;line-height:28px;color:#1A1A2E;">
                  🚀 New Contact Form Submission
                </h2>
              </td>
            </tr>
            <tr>
              <td style="padding:0 30px 30px;font-family:Arial,sans-serif;font-size:14px;line-height:20px;color:#333333;">
                <p>
                  <strong>Name:</strong>
                  ${form.first_name}
                </p>
                <p>
                  <strong>Email:</strong>
                  ${form.email}
                </p>
                <p>
                  <strong>Referring Form:</strong>
                  <br>
                  ${form.referrer}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px;text-align:center;font-family:Arial,sans-serif;font-size:12px;line-height:18px;color:#777777;background-color:#F5F5F5;">
                <p style="margin:4px 0;">&copy; 2025 Mandy Tremelling Center. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

  if (form.referrer === "Contact page mailing list form") {
    toEmails.push({
      email: process.env.BREVO_RECEIVER_MOBILE_EMAIL!,
      name: process.env.BREVO_RECEIVER_MOBILE!,
    });
  }

  if (form.referrer === "Contact page questions form") {
    htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0;padding:0;background-color:#F5F5F5;">
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
    >
      <div style="
      display: none !important;
      visibility: hidden;
      mso-hide: all;
      font-size: 1px;
      line-height: 1px;
      max-height: 0;
      max-width: 0;
      opacity: 0;
      overflow: hidden;
    ">
        New referral from ${form.referrer}
      </div>
      <tr>
        <td align="center">
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="background-color:#FFFFFF;"
          >
            <tr>
              <td align="center" style="background-color:#1A1A2E;padding:20px;">
                <a href="https://www.mandytremelling.com">
                  <img
                    src=${logo_url}
                    alt="Mandy Tremelling logo"
                    width="150"
                    style="display:block;border:0;outline:none;text-decoration:none;"
                  >
                </a>
              </td>
            </tr>
            <tr>
              <td style="background-color:#607D8B;height:4px;line-height:4px;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:30px 30px 10px;text-align:left;">
                <h2 style="margin:0;font-family:Arial,sans-serif;font-size:24px;line-height:28px;color:#1A1A2E;">
                  🚀 New Contact Form Submission
                </h2>
              </td>
            </tr>
            <tr>
              <td style="padding:0 30px 30px;font-family:Arial,sans-serif;font-size:14px;line-height:20px;color:#333333;">
                <p>
                  <strong>Referring Form:</strong>
                  <br>
                  ${form.referrer}
                </p>
                <p>
                  <strong>First Name:</strong>
                  ${form.first_name}
                </p>
                <p>
                  <strong>Email:</strong>
                  ${form.email}
                </p>
                <p>
                  <strong>Message:</strong>
                  <br>
                  ${form.message}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px;text-align:center;font-family:Arial,sans-serif;font-size:12px;line-height:18px;color:#777777;background-color:#F5F5F5;">
                <p style="margin:4px 0;">&copy; 2025 Mandy Tremelling. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
    subject = "New Reader Question";
  }

  const payloadBase = {
    sender: {
      email: process.env.BREVO_SENDER_EMAIL!,
      name: process.env.BREVO_SENDER!,
    },
    to: [] as { email: string; name?: string }[],
    subject: "",
    htmlContent: "",
  };

  // owner notification
  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      ...payloadBase,
      to: toEmails,
      subject: subject,
      htmlContent: htmlContent,
    }),
  });

  // user confirmation
  // await fetch('https://api.brevo.com/v3/smtp/email', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'api-key': process.env.BREVO_API_KEY!,
  //   },
  //   body: JSON.stringify({
  //     ...payloadBase,
  //     to: [{ email, name }],
  //     subject: 'Thanks for reaching out!',
  //     htmlContent: `
  //       <p>Hi ${name},</p>
  //       <p>We;ve received your message and will be in touch soon.</p>
  //       <p>- The Team at ${process.env.BREVO_SENDER_NAME}</p>
  //     `,
  //   }),
  // });

  return NextResponse.json({ success: true });
}
