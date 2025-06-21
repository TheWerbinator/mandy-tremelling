import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface AccordionItem {
  question: string;
  answer: string;
}
export interface BlogCard {
  title: string;
  description: string;
  currentSlug: string;
  mainImage: SanityImageSource;
  imageAlt: string;
}

export interface PostData {
  title: string;
  currentSlug: string;
  mainImage: SanityImageSource;
  author: {
    name: string;
    imageUrl: string;
  };
  imageAlt: string;
  categories: Category[];
  publishedAt: string;
  description: string;
  body: never;
}

export interface Category {
  id: number;
  title: string;
  parent?: (number | null) | Category;
  breadcrumbs?:
    | {
        doc?: (number | null) | Category;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
