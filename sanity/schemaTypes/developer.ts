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
      name: "slug",
      type: "slug",
      options: { source: "name.en" },
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
