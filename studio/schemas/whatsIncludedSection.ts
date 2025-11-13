import { defineType, defineField } from "sanity";

export default defineType({
  name: "whatsIncludedSection",
  title: "What's Included Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Main title for this section",
      initialValue: "What's Included",
    }),
    defineField({
      name: "sectionIcon",
      title: "Section Icon",
      type: "image",
      description: "Icon displayed next to the list (optional)",
      options: { hotspot: true },
    }),
    defineField({
      name: "items",
      title: "List Items (with checkmarks)",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Add items to the list. Each item will display with a checkmark icon.",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
    },
  },
});
