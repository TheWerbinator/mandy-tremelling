"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CircleX, PartyPopper } from "lucide-react";
import { Button } from "./ui/button";

export default function MailingForm({
  referringPage,
}: {
  referringPage: string;
}) {
  const router = useRouter();
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
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "success" : "error");
    if (res.ok) router.push("/thanks");
  };

  return (
    <div className='p-4 lg:p-6 border border-border rounded-[0.8rem]'>
      <form onSubmit={handleSubmit} className='w-full flex flex-col '>
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
          <div className='form-message form-message-success'>
            <PartyPopper />
            <p>Message sent!</p>
          </div>
        )}
        {status === "error" && (
          <div className='form-message form-message-error'>
            <CircleX />
            <p>Something went wrong. Please contact me by email.</p>
          </div>
        )}

        <Button
          className='w-fit mt-4'
          type='submit'
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Count Me In!"}
        </Button>
      </form>
    </div>
  );
}
