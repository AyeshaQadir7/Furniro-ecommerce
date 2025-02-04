const roomInspo = {
  name: "roomInspo",
  title: "Room Inspiration",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Room Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Room Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subtext",
      title: "Subtext",
      type: "text",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
  ],
};

export default roomInspo;
