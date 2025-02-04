const contactPage = {
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "description",
      title: "Page Description",
      type: "text",
    },

    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "hotline",
      title: "Hotline",
      type: "string",
    },
    {
      name: "workingHours",
      title: "Working Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "day",
              title: "Day",
              type: "string",
            },
            {
              name: "hours",
              title: "Hours",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default contactPage;
