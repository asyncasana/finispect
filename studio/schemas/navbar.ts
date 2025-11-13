import { defineType, defineField } from "sanity";

export default defineType({
  name: "navbar",
  title: "Navigation Bar",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Upload the logo image for the navigation bar.",
      options: { hotspot: true },
    }),
    defineField({
      name: "links",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Link Label",
              type: "string",
            },
            {
              name: "url",
              title: "Link URL",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      logo: "logo",
      links: "links",
    },
    prepare({ logo, links }) {
      const linkCount = links?.length || 0;
      return {
        title: "Navigation Bar",
        subtitle: `${linkCount} navigation link${linkCount !== 1 ? "s" : ""}`,
        media: logo,
      };
    },
  },
});
