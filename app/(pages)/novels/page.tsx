import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import mandy from "../../../public/media/novels.jpg";
import pulchra from "../../../public/media/pulchra.webp";
import mwog from "../../../public/media/My World of Glass cover.jpg";

export const metadata: Metadata = {
  title: "Novels written by Mandy Tremelling | All Current Novels",
  description:
    "Here you can find all of the current novels Mandy Tremelling has published or up and coming novels you can expect releasing within the next year",
  openGraph: {
    title: "Novels written by Mandy Tremelling | All Current Novels",
    description:
      "Here you can find all of the current novels Mandy Tremelling has published or up and coming novels you can expect releasing within the next year",
  },
  alternates: {
    canonical: "https://mandytremelling.com/novels",
  },
};

const Novels = () => {
  return (
    <div className='max-w-7xl' id='novels'>
      <section className='w-full mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse justify-center items-center lg:items-start gap-6'>
        <div className='w-full lg:w-[60%]'>
          <h1 className='text-7xl'>Mandy&apos;s Novels</h1>
          <p className='mt-2'>
            The complete works - book to book, cover to cover.
          </p>
        </div>
        <div className='w-full lg:w-[35%]'>
          <Image
            src={mandy}
            alt=''
            width={600}
            height={900}
            sizes='(max-width: 800px) 90vw, 50vw'
            className='rounded-xl lg:w-1/2 mx-auto'
          />
        </div>
      </section>
      {/* Pulchra Arcanum */}
      <section id='pulchra' className='w-full mx-auto'>
        <div className='mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse lg:flex-row justify-between gap-8'>
          <div className='flex flex-col items-start w-full lg:w-[30%]'>
            <strong className='text-3xl'>Out Now!</strong>
            <p className='text-xl pb-4 mt-8'>
              <h2>
                <em className='text-4xl'>Pulchra Arcanum</em>
              </h2>
              <br />
              (Book 1 of the Domum Chronicles)
              <br />
              by Mandy Tremelling
            </p>
            <h3 className='text-xl font-semibold'>
              Available in THREE formats:
            </h3>
            <ul className='flex flex-col gap-4 mt-4'>
              <li>
                <Button>
                  <Link href='https://shop.ingramspark.com/b/084?params=wf6Of0y0afO32yyOq09iGl9gH7WwNgZSkv0WIFp0Iuq'>
                    Paperback
                  </Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link href='https://shop.ingramspark.com/b/084?params=EeKkSTysY36wID0YvevcHcH3SYs9wts3xOwYG8nHbUA'>
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
          <div className='w-full lg:w-[30%]'>
            <Image
              src={pulchra}
              alt='The cover of Pulchra Arcanum with the dragon, wings spread, in front of the setting sun'
              width={600}
              height={900}
              sizes='(max-width: 600px) 90vw, 45vw'
              className='w-[80%] mx-auto'
            />
          </div>
          <div className='flex flex-col flex-start gap-2 w-full lg:w-[30%]'>
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
        </div>
      </section>

      {/* My World of Glass */}
      <section id='mwog' className='w-full max-w-[2000px] mx-auto'>
        <div className='mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between gap-8'>
          <div className='w-full lg:w-[30%]'>
            <Image
              src={mwog}
              alt='Book cover for My World of Glass showing a landscape image with cracked glass in front of it'
              width={600}
              height={900}
              sizes='(max-width: 600px) 90vw, 45vw'
              className='mx-auto w-[80%]'
            />
          </div>
          <div className='flex flex-col flex-start gap-2 w-full lg:w-[30%]'>
            <h2 className='text-3xl font-bold'>My World of Glass</h2>
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
          </div>
          <div className='flex flex-col items-start w-full lg:w-[30%]'>
            <h3 className='text-2xl font-semibold'>Available Now!</h3>

            <p className='text-xl my-4'>
              Available in three formats: <br />
              Paperback, eBook (KU), and Audiobook
            </p>
            <ul className='flex flex-col gap-4'>
              <li>
                <Button>
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
                <Button>
                  <Link href='https://www.amazon.com/My-World-Glass-Mandy-Tremelling/dp/1726835111/ref=sr_1_1?crid=2LCPKQ4DGI3MX&dib=eyJ2IjoiMSJ9.0rwL-iLf4hBC_sx3W1acRh7UtV1pr4mMNTJzXmocOnQT9G1BSQs37jIPBFKX325sje7ZCyalYumPbBjXWb9Tf_M3ogPZsLYEvoJMNxyrld3JscBaw70o305HzI62_KTMKajOG6y250Rc41uhMA8ghX1KgI-TclvfVETpaSYy75YXRzMEX0NtnEcZr0pNqU23bsWRKutXs2RpQ4d-Imkt_VHkIdBfa86MdRccflTgT1g.VguVNM_AJnqrrmn9Aa-0QWVaKL3vXrm1Z9zgv1oAKIU&dib_tag=se&keywords=my+world+of+glass&qid=1737645969&sprefix=%2Caps%2C137&sr=8-1'>
                    Amazon
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Novels;
