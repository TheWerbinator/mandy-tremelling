"use client";
import { useState } from "react";
import { CircleX, PartyPopper } from "lucide-react";
import { Button } from "./ui/button";
import { Alert, AlertTitle } from "./ui/alert";

export default function QuestionForm({
  referringPage,
}: {
  referringPage: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget as HTMLFormElement;
    if (form.website.value) return;
    const data = {
      first_name: form.first_name.value,
      email: form.email.value,
      message: form.message.value,
      referrer: referringPage,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "success" : "error");
  };

  return (
    <div className='p-4 lg:p-6 border border-border rounded-[0.8rem]'>
      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col items-start'
      >
        <label className='mt-6 mb-2'>First Name</label>
        <input
          type='text'
          name='first_name'
          className='flex h-10 w-full rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          required
          autoComplete='true'
        />
        <label className='mt-6 mb-2'>Email</label>
        <input
          aria-label='Email'
          name='email'
          type='email'
          className='flex h-10 w-full rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          required
          autoComplete='true'
        />
        <label className='mt-6 mb-2'>Message</label>
        <textarea
          className='flex h-10 w-full rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-30'
          aria-label='Message'
          name='message'
          rows={4}
          required
        />
        <input
          aria-label='Referrer'
          name='referrer'
          style={{ display: "none" }}
          defaultValue={referringPage}
        />
        <input
          aria-label='Website'
          name='website'
          type='text'
          style={{ display: "none" }}
        />
        {status === "success" && (
          <Alert className='mt-4 w-fit' variant={"success"}>
            <PartyPopper />

            <AlertTitle>Message sent!</AlertTitle>
          </Alert>
        )}
        {status === "error" && (
          <Alert className='mt-4 w-fit' variant={"destructive"}>
            <CircleX />
            <AlertTitle>
              Something went wrong. Please contact me by email.
            </AlertTitle>
          </Alert>
        )}

        <Button
          className='w-fit mt-4 cursor-pointer'
          type='submit'
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send the Raven"}
        </Button>
      </form>
    </div>
  );
}
