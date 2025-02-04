const heroSection = {
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    },
    {
      name: "ctaLink",
      title: "CTA Link",
      type: "url",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default heroSection;
