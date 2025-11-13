import { defineType, defineField } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      description: "Trading name (e.g., Finispect)",
    }),
    defineField({
      name: "registeredName",
      title: "Registered Company Name",
      type: "string",
      description: "Legal/registered company name (e.g., Qualitube Ltd)",
    }),
    defineField({
      name: "servingArea",
      title: "Serving Area",
      type: "string",
      description:
        "Geographic area you serve (e.g., Greater London & the South East)",
    }),

    defineField({
      name: "legalPages",
      title: "Legal Pages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "legalPage" }],
        },
      ],
      description:
        "Select legal pages to show in the footer (e.g. Privacy Policy, Terms)",
    }),
  ],
  preview: {
    select: {
      title: "companyName",
    },
  },
});