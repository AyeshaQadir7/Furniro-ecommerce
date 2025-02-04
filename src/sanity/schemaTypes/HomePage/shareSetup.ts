const shareSetup = {
  name: "shareSetup",
  title: "Share Setup Section",
  type: "document",
  fields: [
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "hashtag",
      title: "Hashtag",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default shareSetup;
