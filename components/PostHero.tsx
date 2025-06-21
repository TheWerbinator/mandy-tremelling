import React from "react";

import { formatDateTime } from "../utils/formatDateTime";

import Image from "next/image";
import { PostData } from "../lib/interface";
import { urlFor } from "../lib/sanity";

export const PostHero = ({ post }: { post: PostData }) => {
  const metaImage = urlFor(post.mainImage).url();

  return (
    <div className='relative flex justify-center items-end w-full'>
      <div className='relative flex flex-col items-center w-full max-w-[2000px] pb-4 z-20'>
        <div className='flex flex-col items-start text-shadow-xl text-white w-[90%] lg:w-[70%]'>
          {/* <div className='categories'>
            {post.categories?.map((category, index) => {
              if (typeof category === "object" && category !== null) {
                const { title: categoryTitle } = category;

                const titleToUse = categoryTitle || "Untitled category";

                let isLast = false;
                if (post.categories) {
                  isLast = index === post.categories.length - 1;
                }

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div> */}

          {post.categories !== undefined && (
            <p className='uppercase font-medium'>
              {post.categories?.map((category, i) =>
                i < post.categories.length - 1
                  ? `${category.title}, `
                  : `${category.title}`
              )}
            </p>
          )}
          <h1 className='text-[3.5rem] leading-[1.2] font-medium'>
            {post.title}
          </h1>
          <div className='flex justify-start items-center gap-4 mt-4'>
            <div className='flex items-center gap-2'>
              {post.author && (
                <>
                  {/* <div className='rounded-full overflow-hidden h-10 w-10 shadow-sm'>
                    <Image
                      className='w-full h-full object-cover object-top'
                      src={post.author.imageUrl}
                      alt={`Photo of ${post.author.name}`}
                      width={50}
                      height={50}
                    />
                  </div> */}
                  <div className='flex flex-col text-xl'>
                    <p className='text-lg'>Author: </p>
                    {post.author.name}
                  </div>
                </>
              )}
            </div>
            {post.publishedAt && (
              <div className='flex flex-col'>
                <p className='text-lg'>Date Published: </p>

                <time className='text-xl' dateTime={post.publishedAt}>
                  {formatDateTime(post.publishedAt)}
                </time>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='min-h-[50vh] lg:min-h-[80vh] select-none'>
        {metaImage && (
          <Image
            src={metaImage}
            alt={post.imageAlt}
            fill
            priority
            className='object-cover w-full h-auto relative'
          />
        )}
        <div className='absolute bottom-[-5px] left-0 pointer-events-none w-full h-[50%] bg-linear-to-t from-black to-transparent' />
      </div>
    </div>
  );
};
