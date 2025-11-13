import { defineType, defineField } from "sanity";

export default defineType({
  name: "pricingSection",
  title: "Pricing Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Main title for the pricing section",
      initialValue: "Pricing: Premium Snagging Inspections",
    }),
    defineField({
      name: "pricingItems",
      title: "Pricing Items",
      type: "array",
      of: [
        {
          name: "item",
          title: "Pricing Item",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Service Label",
              type: "string",
              description: 'e.g., "1-Bed Flat"',
            },
            {
              name: "price",
              title: "Price",
              type: "string",
              description: 'e.g., "from £295" or "Contact us"',
            },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "price",
            },
          },
        },
      ],
      description: "Add pricing items (e.g., 1-Bed Flat, 2-Bed Flat, etc.)",
    }),
    defineField({
      name: "optionalExtrasTitle",
      title: "Optional Extras Title",
      type: "string",
      initialValue: "Optional Extras",
    }),
    defineField({
      name: "optionalExtras",
      title: "Optional Extras (with checkmarks)",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Add optional extras. Each will display with a checkmark icon.",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
    },
  },
});
