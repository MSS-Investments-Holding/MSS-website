import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "News Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Fintech",
          "Investments",
          "AI",
          "Digital Assets",
          "Venture",
          "Strategy",
          "Operations",
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Publish Date",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "Short summary shown on the listing page and article hero.",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(300),
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading (H3)", value: "h3" },
          ],
          marks: { decorators: [{ title: "Strong", value: "strong" }] },
        },
        { type: "image", options: { hotspot: true } },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
