// /app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.json();
  if (!form.email || !form.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const hubspotRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_APP_KEY}`,
        },
        body: JSON.stringify({
          properties: {
            email: form.email,
            lastname: form.last_name,
            firstname: form.first_name,
            phone: form.phone,
            project_details: form.message,
            hubspot_owner_id: process.env.HUBSPOT_OWNER_ID,
            hs_lead_status: "NEW",
          },
        }),
      }
    );
    if (!hubspotRes.ok) {
      const errorData = await hubspotRes.json();
      console.error("HubSpot error:", errorData);
      return NextResponse.json(
        { message: "Failed to create contact", details: errorData },
        { status: hubspotRes.status }
      );
    }
    console.log(JSON.stringify(hubspotRes, null, 2));
  } catch (e) {
    console.error("Hubspot API error:", e);
    const errorMessage =
      e instanceof Error ? e.message : "An unknown error occurred";
    return NextResponse.json(
      { message: `Failed to create contact: ${errorMessage}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
