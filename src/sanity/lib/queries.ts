import { client } from "./client";

// Fetch Navigation Bar
export async function getNavbar() {
  return client.fetch(
    `*[_type == "navbar"][0]{
      logo,
      links[]{
        label,
        url
      }
    }`
  );
}

// Fetch Hero Section
export async function getHeroSection() {
  return client.fetch(
    `*[_type == "heroSection"][0]{
      backgroundType,
      backgroundImage,
      backgroundVideo{
        asset->{
          url
        }
      },
      title,
      subtitle,
      ctaText,
      ctaUrl
    }`
  );
}

// Fetch About Section
export async function getAboutSection() {
  return client.fetch(
    `*[_type == "aboutSection"][0]{
      sectionTitle,
      cards[]{
        icon,
        title,
        content
      }
    }`
  );
}

// Fetch What's Included Section
export async function getWhatsIncludedSection() {
  return client.fetch(
    `*[_type == "whatsIncludedSection"][0]{
      sectionTitle,
      sectionIcon,
      items
    }`
  );
}

// Fetch Why Choose Us Section
export async function getWhyChooseUsSection() {
  return client.fetch(
    `*[_type == "whyChooseUsSection"][0]{
      sectionTitle,
      sectionIcon,
      reasons
    }`
  );
}

// Fetch Pricing Section
export async function getPricingSection() {
  return client.fetch(
    `*[_type == "pricingSection"][0]{
      sectionTitle,
      pricingItems[]{
        label,
        price
      },
      optionalExtrasTitle,
      optionalExtras
    }`
  );
}

// Fetch Contact Section
export async function getContactSection() {
  return client.fetch(
    `*[_type == "contactSection"][0]{
      sectionTitle,
      introText,
      email,
      phone,
      backgroundImage,
      formLabels{
        nameLabel,
        emailLabel,
        propertyTypeLabel,
        messageLabel,
        submitButtonText
      },
      disclaimerText
    }`
  );
}

// Fetch Footer
export async function getFooter() {
  return client.fetch(
    `*[_type == "footer"][0]{
      companyName,
      registeredName,
      servingArea,
      legalPages[]-> {
        _id,
        title,
        slug
      }
    }`
  );
}
