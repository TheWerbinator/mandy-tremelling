import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MailingForm from "@/components/MailingForm";
import QuestionForm from "@/components/QuestionForm";
import { Button } from "@/components/ui/button";
import { BookHeart } from "lucide-react";

import mandy from "../../../public/media/contact.webp";
import facebook from "../../../public/media/facebook_logo.webp";
import instagram from "../../../public/media/instagram_logo.webp";
import bluesky from "../../../public/media/bluesky_logo.webp";
import bookshop from "../../../public/media/bookshop.org.png";

export const metadata: Metadata = {
  title: "Contact Me! | Mandy Tremelling",
  description:
    "Let me know about any questions you have about writing or my works, keep up to date on my blog and novels, or follow me on social media!",
  openGraph: {
    title: "Contact Me! | Mandy Tremelling",
    description:
      "Let me know about any questions you have about writing or my works, keep up to date on my blog and novels, or follow me on social media!",
  },
  alternates: {
    canonical: "https://mandytremelling.com/contact",
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

      <section className='max-w-7xl flex flex-col-reverse lg:flex-row justify-evenly items-center'>
        <Image
          src={mandy}
          alt='Mandy sitting in a park in her white shirt, pink cardigan, and blue jeans, smiliing'
          width={600}
          height={1000}
          sizes='(max-width: 800px) 90vw, 50vw'
          className='mt-8 mx-auto rounded-xl w-[90%] lg:w-[45%]'
        />
        <div className='mt-8 w-[90%] lg:w-[45%]'>
          <h2 className='text-2xl mb-4'>Find Mandy on social media</h2>
          <div className='flex justify-start gap-4'>
            <Button className='h-fit w-[20%] bg-zinc-200'>
              <Link href='https://www.facebook.com/mandyTremmy'>
                <Image
                  src={facebook}
                  alt='Facebook logo'
                  width={100}
                  height={100}
                />
              </Link>
            </Button>
            <Button className='h-fit w-[20%] bg-zinc-200'>
              <Link href='https://instagram.com/mandytremmy.books'>
                <Image
                  src={instagram}
                  alt='Instagram logo'
                  width={100}
                  height={100}
                />
              </Link>
            </Button>
            <Button className='h-fit w-[20%] bg-zinc-200'>
              <Link href='https://bsky.app/profile/mandytremmy.bsky.social'>
                <Image
                  src={bluesky}
                  alt='BlueSky logo'
                  width={100}
                  height={100}
                />
              </Link>
            </Button>
          </div>
          <div className='mt-8'>
            <h2>See what I&apos;m reading!</h2>
            <Button>
              <Link href='https://bookshop.org/a/111208/create_registry'>
                Goodreads Author Page
              </Link>
            </Button>
          </div>
          <div className='mt-8 flex flex-col gap-4'>
            <div>
              <h2 className='text-xl'>Bookstore Options</h2>
              <p className='mb-2'>
                Support LOCAL bookstores using the following link:
              </p>
              <Link
                href='https://bookshop.org/shop/mandytremmy'
                className='w-fit'
              >
                <Image
                  src={bookshop}
                  alt='Bookshop.org, support indie bookstores'
                  className='w-1/2 h-auto border-1 rounded-2xl dark:border-black'
                />
              </Link>
            </div>
            <div>
              <p>Alternatively:</p>
              <Button>
                <Link href='https://www.amazon.com/stores/Mandy-Tremelling/author/B07M8HMJGF?ref=sr_ntt_srch_lnk_1&qid=1740069726&sr=8-1&isDramIntegrated=true&shoppingPortalEnabled=true'>
                  Amazon
                </Link>
              </Button>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl'>
                Mandy&apos;s Stories for Your Special Day
              </h2>
              <p>Create a Bookshop.org registry and support me!</p>
              <Button className='w-fit'>
                <Link
                  href='https://bookshop.org/a/111208/create_registry'
                  className='flex justify-between items-center'
                >
                  <BookHeart className='mr-2' /> Bookshop.org Registry Creator{" "}
                  <BookHeart className='ml-2' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
