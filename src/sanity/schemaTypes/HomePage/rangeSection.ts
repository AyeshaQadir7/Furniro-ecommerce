const rangeSection = {
  name: "rangeSection",
  title: "Range Section",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            { name: "caption", title: "Caption", type: "string" },
          ],
        },
      ],
    },
  ],
};
export default rangeSection;
