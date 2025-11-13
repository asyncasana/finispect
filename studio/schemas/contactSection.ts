import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Contact",
    }),
    defineField({
      name: "introText",
      title: "Introduction Text",
      type: "text",
      rows: 3,
      description:
        "Text displayed above the contact form (you can include contact details here)",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image (optional)",
      type: "image",
      description: "Background image for the contact section",
      options: { hotspot: true },
    }),
    defineField({
      name: "formLabels",
      title: "Form Field Labels",
      type: "object",
      fields: [
        {
          name: "nameLabel",
          title: "Name Field Label",
          type: "string",
          initialValue: "Name",
        },
        {
          name: "emailLabel",
          title: "Email Field Label",
          type: "string",
          initialValue: "Email",
        },
        {
          name: "propertyTypeLabel",
          title: "Property Type Field Label",
          type: "string",
          initialValue: "Property Type",
        },
        {
          name: "messageLabel",
          title: "Message Field Label",
          type: "string",
          initialValue: "Message",
        },
        {
          name: "submitButtonText",
          title: "Submit Button Text",
          type: "string",
          initialValue: "Send",
        },
      ],
    }),
    defineField({
      name: "disclaimerText",
      title: "Disclaimer Text (optional)",
      type: "text",
      rows: 2,
      description:
        "Optional disclaimer text displayed below the submit button (e.g., 'By submitting this form you agree to our Terms & Privacy Policy')",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
    },
  },
});
