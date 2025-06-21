import { createClient } from "next-sanity";
import imageURLBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  apiVersion: "2025-05-20",
  dataset: "production",
  projectId: "8jxw1uno",
  useCdn: false,
});

const builder = imageURLBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
