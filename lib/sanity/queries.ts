import { client } from "./client";
import type { SanityArticle } from "./types";

// All published articles, newest first
export async function getAllArticles(): Promise<SanityArticle[]> {
  return client.fetch(
    `*[_type == "article"] | order(date desc) {
      _id, title, slug, category, excerpt, date,
      "image": image.asset->url
    }`
  );
}

// Single article by slug (full content)
export async function getArticleBySlug(slug: string): Promise<SanityArticle | null> {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id, title, slug, category, excerpt, date,
      "image": image.asset->url,
      body
    }`,
    { slug }
  );
}

// All slugs — for generateStaticParams
export async function getAllArticleSlugs(): Promise<string[]> {
  const results: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "article"] { slug }`
  );
  return results.map((r) => r.slug.current);
}
