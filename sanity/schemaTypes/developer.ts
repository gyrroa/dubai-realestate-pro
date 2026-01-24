import { defineField, defineType } from "sanity";

export const developerType = defineType({
  name: "developer",
  title: "Developer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name_ar",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "description_ar",
      title: "Description (Arabic)",
      type: "text",
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
});
