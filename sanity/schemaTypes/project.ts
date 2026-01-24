import { defineField, defineType } from "sanity";
import { localeString } from "./localeString";
import { localeText } from "./localeText";

export const projectType = defineType({
  name: "project",
  title: "Project",
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
      name: "community",
      type: "reference",
      to: [{ type: "community" }],
      hidden: ({ parent }) => !(parent as any)?.developer,
      options: {
        filter: ({ parent }) => ({
          filter: "developer._ref == $developerId",
          params: {
            developerId: (parent as any)?.developer?._ref,
          },
        }),
      },
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "location",
      type: "localeString",
    }),
    defineField({
      name: "unit_type",
      type: "array",
      of: [{ type: "localeString" }],
    }),
    defineField({
      name: "startingPrice",
      title: "Starting Price",
      type: "localeString",
    }),
    defineField({
      name: "amenities",
      type: "array",
      of: [{ type: "localeString" }],
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
