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
      name: "madeByText",
      title: '"Made By" Text',
      type: "string",
      initialValue: "Made with ❤️ by",
    }),
    defineField({
      name: "madeByLink",
      title: '"Made By" Link',
      type: "object",
      fields: [
        {
          name: "text",
          title: "Link Text",
          type: "string",
        },
        {
          name: "url",
          title: "Link URL",
          type: "url",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "companyName",
    },
  },
});
