import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name_ar",
      title: "Name (Arabic)",
      type: "string",
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
      name: "developer",
      type: "reference",
      to: [{ type: "developer" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "community",
      type: "reference",
      to: [{ type: "community" }],
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "location_ar",
      title: "Location (Arabic)",
      type: "string",
    }),
    defineField({
      name: "unit_type",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "unit_type_ar",
      title: "Unit Type (Arabic)",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
