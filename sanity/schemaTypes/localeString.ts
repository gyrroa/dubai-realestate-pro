import { defineType, defineField } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Locale String",
  type: "object",
  fields: [
    defineField({ name: "en", type: "string", title: "English" }),
    defineField({ name: "ar", type: "string", title: "Arabic" }),
  ],
});
