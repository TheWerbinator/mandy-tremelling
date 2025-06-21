import type { Metadata } from "next";

import MailingForm from "@/components/MailingForm";
import QuestionForm from "@/components/QuestionForm";

export const metadata: Metadata = {
  title: "Contact Me! | Mandy Tremelling",
  description:
    "Let me know about any questions you have about writing or my works, keep up to date on my blog and novels, or follow me on social media!",
  openGraph: {
    title: "Contact Me! | Mandy Tremelling",
    description:
      "Let me know about any questions you have about writing or my works, keep up to date on my blog and novels, or follow me on social media!",
  },
};

const Contact = () => {
  return (
    <div className='mt-20' id='contact'>
      {/* Form */}
      <section className='w-full max-w-5xl px-4 lg:px-8'>
        <h1 className='text-4xl'>Let&apos;s Be Pen-Pals</h1>
        <div className='mt-8'>
          <p className='text-xl mb-4 font-semibold'>
            Join my mailing list to be kept up to date on my blog and novels.
            When you sign up you&apos;ll receive bonus content for my novel
            Pulchra Arcanum.
          </p>
          <MailingForm referringPage='Contact page mailing list form' />
        </div>
        <div className='mt-20'>
          <p className='text-xl mb-4 font-semibold'>
            Let me know about any questions you have about writing or more
            specifically my works!
          </p>
          <QuestionForm referringPage='Contact page questions form' />
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default Contact;
