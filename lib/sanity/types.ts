// Matches the Sanity schema defined in sanity/schemas/article.ts
export interface SanityArticle {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt: string;
  date: string;         // ISO date string "YYYY-MM-DD"
  image: string;        // resolved CDN URL
  body?: PortableTextBlock[];
}

// Sanity Portable Text block (simplified — covers what the news pages use)
export type PortableTextBlock = {
  _type: "block";
  _key: string;
  style: "normal" | "h3";
  children: { _type: "span"; _key: string; text: string; marks?: string[] }[];
} | {
  _type: "image";
  _key: string;
  asset: { _ref: string };
  "asset->": { url: string };
} | {
  _type: "bulletIntro" | "bullet";
  _key: string;
  children: { _type: "span"; _key: string; text: string }[];
};
