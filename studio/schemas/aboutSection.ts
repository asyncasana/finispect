import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: 'Main title for the About section (e.g., "About")',
      initialValue: "About",
    }),
    defineField({
      name: "cards",
      title: "About Cards (Carousel)",
      type: "array",
      of: [
        {
          name: "card",
          title: "Card",
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Card Icon",
              type: "image",
              description: "Upload an icon/image for this card.",
              options: { hotspot: true },
            },
            {
              name: "title",
              title: "Card Title",
              type: "string",
              description:
                "Title for this card (optional, can be same as section title)",
            },
            {
              name: "content",
              title: "Card Content",
              type: "text",
              rows: 10,
              description: "The main text content for this card.",
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "icon",
            },
          },
        },
      ],
      description:
        "Add cards for the About section. If you add more than one card, they will display as a carousel with navigation.",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
    },
  },
});
