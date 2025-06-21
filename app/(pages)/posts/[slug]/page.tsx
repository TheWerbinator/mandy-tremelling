import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

import { PostHero } from "@/components/PostHero";
import { PostData } from "@/lib/interface";
import BlogCards from "@/components/BlogCards";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, unknown>>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getData(slug);

  const metaImage = urlFor(post.mainImage).url();
  return {
    title: post.title,
    description: post.description,
    // you can also add openGraph, twitter, etc here
    openGraph: {
      title: post.title,
      description: post.description,
      images: metaImage
        ? [
            {
              url: metaImage,
              alt: post.imageAlt || post.title,
            },
          ]
        : undefined,
    },
  };
}

const getData = async (slug: string) => {
  const query = `*[_type == 'post' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    mainImage,
    author->{
      name,
      image,
      "imageUrl": image.asset->url 
    },
    imageAlt,
    "categories": categories[]->{
      title,
      _id
    },
    "publishedAt": _createdAt,
    description,
    body
}[0]`;
  const data = await client.fetch(query);
  return data;
};

const Post = async (props: PageProps) => {
  const { slug } = await props.params;
  const post: PostData = await getData(slug);

  const ptComponents = {
    types: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      image: ({ value }: { value: any }) => {
        if (!value?.asset?._ref) return null;
        const src = urlFor(value).width(800).auto("format").url();
        return (
          <figure className='flex jusify-center my-8'>
            <Image
              src={src}
              alt={value.alt || ""}
              width={1200}
              height={630}
              className='w-full object-cover aspect-1.91'
              sizes='(max-width: 600px) 90vw, 70vw'
            />
            {value.caption && (
              <figcaption className='text-md'>{value.caption}</figcaption>
            )}
          </figure>
        );
      },
      // you can add more custom renderers here (e.g. code blocks)
    },
  };

  return (
    <div className='w-full'>
      <article className='flex flex-col items-center pb-8'>
        <PostHero post={post} />

        <div className='post-body'>
          <PortableText value={post.body} components={ptComponents} />
          {/* {post.relatedPosts && post.relatedPosts.length > 0 && (
              <RelatedPosts
                className='mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]'
                docs={post.relatedPosts.filter(
                  (post) => typeof post === "object"
                )}
              />
            )} */}
        </div>
      </article>
      <div className='flex flex-col items-start gap-4 w-[70%] mx-auto mt-20'>
        <h2 className='text-4xl'>Keep Reading ~</h2>
        <BlogCards limit={3} currentPage={slug} />
      </div>
    </div>
  );
};

export default Post;
