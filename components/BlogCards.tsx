import Link from "next/link";
import { BlogCard } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";

const getPosts = async (limit: number, slug?: string) => {
  const slugFilter = slug ? `&& slug.current != '${slug}'` : "";
  const query = `*[_type == 'post' ${slugFilter}] | order(_createdAt desc)[0...${limit}] {
    title,
    description,
    "currentSlug": slug.current,
    mainImage,
    imageAlt
  }`;
  const data = await client.fetch(query);
  return data;
};

const BlogCards = async ({
  limit,
  currentPage,
}: {
  limit: number;
  currentPage: string | null;
}) => {
  const data: BlogCard[] =
    currentPage !== null
      ? await getPosts(limit, currentPage)
      : await getPosts(limit);

  return (
    <div className='flex flex-wrap justify-center gap-4 my-4 mx-auto lg:justify-center lg:gap-4'>
      {data.map((post, index) => {
        return (
          <Link
            href={`/posts/${post.currentSlug}`}
            className='card flex flex-col align-center w-[90%] lg:w-[32%] lg:max-w-[48vw] bg-zinc-100 dark:bg-neutral-950 hover:shadow-lg'
            key={`post ${index}`}
          >
            <div className='m-0 p-0 overflow-hidden w-full'>
              <Image
                className='w-full h-auto aspect-square  object-cover object-top card-hover:transform-[scale(1.025)] card-hover:transform-[translateZ(1px)]'
                src={urlFor(post.mainImage).url()}
                alt={post.imageAlt}
                width={500}
                height={500}
                sizes='(max-width: 600px) 30vw, 90vw'
              />
            </div>
            <div className='flex flex-col items-start gap-2 m-4'>
              <p className='text-xl font-semibold text-black dark:text-white m-0 '>
                {post.title}
              </p>
              <p className='text-black dark:text-white text-md m-0'>
                {post.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogCards;
