import type { Metadata } from "next";

import BlogCards from "@/components/BlogCards";

export const metadata: Metadata = {
  title: "Blog Posts Mandy Tremelling",
  description: "Read up on novel updates, writing insights, and resources",
  openGraph: {
    title: "Blog Posts Mandy Tremelling",
    description: "Read up on novel updates, writing insights, and resources",
  },
  alternates: {
    canonical: "https://mandytremelling.com/posts",
  },
};

const Posts = () => {
  return (
    <>
      {/* Posts List */}
      <section className='max-w-7xl'>
        <div className='px-6 lg:px-[1%]'>
          <h1 className='text-[3.5rem]'>Posts</h1>
          <p className=''>
            Behind the Scenes of my projects and writing process, updates on the
            progress of my new novels, and resources for writing your own story.
          </p>
        </div>
        <BlogCards limit={21} currentPage={null} />
      </section>

      {/* Call to Action */}
      <section></section>
    </>
  );
};

export default Posts;
