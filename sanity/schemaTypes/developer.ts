import { defineField, defineType } from "sanity";
import { localeString } from "./localeString";
import { localeText } from "./localeText";

export const developerType = defineType({
  name: "developer",
  title: "Developer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: (doc: any) => doc.name?.en || "",
        slugify: (input) => {
          return (input || "")
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .split(/\s+/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("-");
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "localeText",
    }),
    defineField({
      name: "logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "hero_image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "dev_image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "has_community",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name.en",
      media: "logo",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || "(no English name)",
        media,
      };
    },
  },
});
