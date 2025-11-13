import { defineType, defineField } from "sanity";

export default defineType({
  name: "whyChooseUsSection",
  title: "Why Choose Us Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Main title for this section",
      initialValue: "Why Choose Us",
    }),
    defineField({
      name: "sectionIcon",
      title: "Section Icon",
      type: "image",
      description: "Icon displayed next to the list (optional)",
      options: { hotspot: true },
    }),
    defineField({
      name: "reasons",
      title: "Reasons (with checkmarks)",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Add reasons why customers should choose your service. Each reason will display with a checkmark icon.",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
    },
  },
});
