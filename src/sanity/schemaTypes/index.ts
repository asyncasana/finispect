import { type SchemaTypeDefinition } from "sanity";
import aboutSection from "../../../studio/schemas/aboutSection";
import navbar from "../../../studio/schemas/navbar";
import heroSection from "../../../studio/schemas/heroSection";
import whatsIncludedSection from "../../../studio/schemas/whatsIncludedSection";
import whyChooseUsSection from "../../../studio/schemas/whyChooseUsSection";
import pricingSection from "../../../studio/schemas/pricingSection";
import contactSection from "../../../studio/schemas/contactSection";
import footer from "../../../studio/schemas/footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navbar,
    heroSection,
    aboutSection,
    whatsIncludedSection,
    whyChooseUsSection,
    pricingSection,
    contactSection,
    footer,
  ],
};
