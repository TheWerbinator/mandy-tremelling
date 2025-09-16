import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

const staticURLs: MetadataRoute.Sitemap = [
  {
    url: `https://www.mandytremelling.com/`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  },
  {
    url: `https://www.mandytremelling.com/novels`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: `https://www.mandytremelling.com/posts`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `https://www.mandytremelling.com/contact`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  },
];

const getPosts = async (): Promise<MetadataRoute.Sitemap> => {
  const query = `*[_type == 'post'] | order(publishedAt desc) {
    "currentSlug": slug.current,
  }`;
  const data = await client.fetch(query);
  return data.map((post: { currentSlug: string }) => {
    return {
      url: `https://www.mandytremelling.com/posts/${post.currentSlug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    };
  });
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const postURLs: MetadataRoute.Sitemap = await getPosts();
  return [...staticURLs, ...postURLs];
};

export default sitemap;
