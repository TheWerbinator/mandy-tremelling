import Image from "next/image";
import mandy from "../public/mandy.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogCards from "@/components/BlogCards";

import pulchra from "../public/media/pulchra.webp";
import mwog from "../public/media/My World of Glass cover.jpg";
import release_banner from "../public/media/banner.png";

export default function Home() {
  return (
    <>
      <section className='max-w-7xl'>
        <div className='mx-auto mt-8 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row justify-evenly items-center gap-10 w-full'>
            <div className='flex flex-col items-center w-full lg:w-1/2 text-center bg-black opacity-80 p-5 rounded-2xl prose dark:prose-invert'>
              <h1 className='font-normal text-4xl font-bold text-slate-50 tracking-tight sm:text-5xl md:text-6xl'>
                Mandy Tremelling
              </h1>
              <p className='mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Mandy resides in a rapidly growing city in Utah with her loving
                husband, daughter, and two dogs. She holds a degree in social
                work which is complimented by a degree in criminal justice, and
                has dedicated her career to child welfare--a field she is deeply
                passionate about.
              </p>
              <p className='mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                In her literary pursuits Mandy has made a mark with her debut
                novel, My World of Glass, published in 2018, with an audiobook
                version released in 2023. Additionally she has authored two
                novellas during her high school years, both of which garnered
                local recognition and acclaim.
              </p>
              <div className='mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
                <Link
                  href='/contact'
                  className='font-medium flex items-center text-xl transition-colors bg-white text-black hover:bg-white/80 py-2 px-4 rounded-md'
                  prefetch={false}
                >
                  Let&apos;s Talk!
                </Link>
              </div>
            </div>
            <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex w-full lg:w-[50%] lg:items-center'>
              <Image
                className='rounded-xl'
                src={mandy}
                alt="Mandy sitting at a table on the sidewalk outside a cafe. She's wearing a pink cardigan, white shirt, jeans, and a silver necklace. Her phone and 'My World of Glass' lay on the table."
              />
            </div>
          </div>
        </div>
      </section>

      <section id='coming-soon' className='w-full max-w-7xl px-8 lg:px-0'>
        <Link href='https://www.facebook.com/share/16jWpmJBJ3/'>
          <Image
            className='w-full'
            src={release_banner}
            alt='banner with details about the release of Pulchra Arcanum'
            sizes='100vw'
          />
        </Link>
        <div className='mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse lg:flex-row justify-between gap-8'>
          <div className='w-full lg:w-[30%]'>
            <Image
              src={pulchra}
              alt='The cover of Pulchra Arcanum with the dragon, wings spread, in front of the setting sun'
              width={600}
              height={900}
              sizes='(max-width: 600px) 90vw, 45vw'
              className='mx-auto'
            />
          </div>
          <div className='flex flex-col flex-start gap-2 w-full lg:w-[25%]'>
            <strong className='font-bold italic'>Merlin is a liar.</strong>
            <strong className='font-bold italic'>Arthur is vengeful.</strong>
            <strong className='font-bold italic'>Megara is lost.</strong>
            <p className='mt-3'>
              Raised by the legendary{" "}
              <strong className='font-bold'>Merlin</strong>, Megara always knew
              she was destined for great things. When the truth about her past
              is revealed and Merlin is killed, Megara is forced to flee and
              return to her roots.
            </p>
            <p className='mt-3'>
              With her unlikely animal sidekick Superus and newfound friends Leo
              and Adina, Megara learns more about who she is. When{" "}
              <strong className='font-bold'>King Arthur</strong> seeks revenge
              she must choose between embracing her fate or succumbing to the
              darkness within her.
            </p>
            <p className='mt-3'>
              With <strong className='font-bold'>unreliable narration</strong>{" "}
              and a <strong className='font-bold'>slow burn romance</strong>,
              this <strong className='font-bold'>Arthurian retelling</strong>{" "}
              will keep you on the edge of your seat until the very end.
            </p>
          </div>
          <div className='flex flex-col items-start w-full lg:w-[35%]'>
            <h2 className='text-4xl'>Coming Soon!</h2>
            <p className='text-xl pb-4'>
              Launching August 1, 2025: <em>Pulchra Arcanum</em> (Book 1 of the
              Domum Chronicles) by Mandy Tremelling
            </p>
            <h3 className='text-xl font-semibold'>
              At this time there will be THREE formats:
            </h3>
            <ul className='flex flex-col gap-4'>
              <li>
                <Button>
                  <Link href='https://www.barnesandnoble.com/w/pulchra-arcanum-mandy-tremelling/1147376356'>
                    Paperback
                  </Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link href='https://www.barnesandnoble.com/w/pulchra-arcanum-mandy-tremelling/1147376356?ean=9798998838026'>
                    Hardcover (which includes a bonus chapter)
                  </Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link href='https://www.barnesandnoble.com/w/pulchra-arcanum-mandy-tremelling/1147376356?ean=9798998838019'>
                    eBook
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id='coming-soon' className='w-full max-w-7xl px-8 lg:px-0'>
        <h2 className='px-4 lg:px-8 text-4xl'>Mandy&apos;s Most Recent Work</h2>
        <div className='py-8 px-4 lg:px-8 w-full flex flex-col lg:flex-row justify-between gap-8'>
          <div className='flex flex-col flex-start gap-2 w-full lg:w-[60%]'>
            <h3 className='font-bold text-3xl'>My World of Glass</h3>
            <p className='mt-3'>
              In a world where the line is blurred between youth convict and
              parentless children, Dessa Lakewood was just an ordinary girl -
              until everything changed in one horrible night. In a devastating
              turn of fate, she becomes the sole survivor of her family, thrust
              into a harsh reality where all isn&apos;t fair as a Workforce
              employee.
            </p>
            <p className='mt-3'>
              Now an orphan, Dessa is forced into the slave-like system for
              foster children and convicts. As she navigates her new life in a
              society which deems her unsuitable for other living, she finds
              herself on the run from the law. When she finds her new friends,
              will they help her clear her name or offer her up as a lamb to
              slaughter?
            </p>

            <div className='flex flex-col items-start gap-4 w-full'>
              <h3 className='text-2xl font-semibold'>
                Available now in three formats: <br />
                Paperback, eBook (KU), and Audiobook
              </h3>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Button variant={"outline"}>
                    <Link href='https://www.barnesandnoble.com/w/pulchra-arcanum-mandy-tremelling/1147376356'>
                      Bookshop.org
                    </Link>
                  </Button>
                </li>
                {/* {/* <li>
                <Button>
                  <Link href='https://www.barnesandnoble.com/w/pulchra-arcanum-mandy-tremelling/1147376356?ean=9798998838026'>
                    Hardcover (which includes a bonus chapter)
                  </Link>
                </Button>
              </li> */}
                <li>
                  <Button variant={"outline"}>
                    <Link href='https://www.amazon.com/My-World-Glass-Mandy-Tremelling/dp/1726835111/ref=sr_1_1?crid=2LCPKQ4DGI3MX&dib=eyJ2IjoiMSJ9.0rwL-iLf4hBC_sx3W1acRh7UtV1pr4mMNTJzXmocOnQT9G1BSQs37jIPBFKX325sje7ZCyalYumPbBjXWb9Tf_M3ogPZsLYEvoJMNxyrld3JscBaw70o305HzI62_KTMKajOG6y250Rc41uhMA8ghX1KgI-TclvfVETpaSYy75YXRzMEX0NtnEcZr0pNqU23bsWRKutXs2RpQ4d-Imkt_VHkIdBfa86MdRccflTgT1g.VguVNM_AJnqrrmn9Aa-0QWVaKL3vXrm1Z9zgv1oAKIU&dib_tag=se&keywords=my+world+of+glass&qid=1737645969&sprefix=%2Caps%2C137&sr=8-1'>
                      Amazon
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full lg:w-[35%]'>
            <Image
              src={mwog}
              alt='Book cover for My World of Glass showing a landscape image with cracked glass in front of it'
              width={600}
              height={900}
              sizes='(max-width: 600px) 90vw, 45vw'
              className='mx-auto'
            />
          </div>
        </div>
      </section>

      <section id='blog' className='w-full max-w-7xl px-4 lg:px-8'>
        <div className='flex justify-between items-center w-full px-6 py-8 bg-zinc-100 dark:bg-neutral-950'>
          <div className='flex flex-col justify-start'>
            <h2 className='text-2xl font-semibold'>Read the Blog</h2>
            <p className='text-lg'>
              Look out for free writing advice and resources & stay up to date
              with Mandy&apos;s Works-in-Progress!
            </p>
          </div>
          <Button>
            <Link href='/posts' className='text-xl font-semibold'>
              All Posts
            </Link>
          </Button>
        </div>
        <div className='mt-8'>
          <h3 className='text-2xl font-semibold ml-[1%]'>Recent Posts</h3>
          <BlogCards limit={3} currentPage={null} />
        </div>
      </section>
    </>
  );
}
