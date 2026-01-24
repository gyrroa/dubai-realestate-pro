import { defineField, defineType } from "sanity";
import { localeString } from "./localeString";
import { localeText } from "./localeText";

export const communityType = defineType({
  name: "community",
  title: "Community",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "localeText",
    }),
    defineField({
      name: "developer",
      type: "reference",
      to: [{ type: "developer" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "name.en",
      media: "image",
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
