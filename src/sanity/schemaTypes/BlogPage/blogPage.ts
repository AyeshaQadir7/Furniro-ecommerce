const blogPage = {
  name: "blog",
  title: "Blog",
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
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "publishedDate",
      title: "Published Date",
      type: "datetime",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "admin",
      title: "Admin",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
    },
  ],
};

export default blogPage;
