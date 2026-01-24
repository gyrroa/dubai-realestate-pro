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
      name: "description",
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
      name: "address",
      type: "string",
    }),
    defineField({
      name: "ammenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
