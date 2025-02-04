const footer = {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
      {
        name: 'brandName',
        title: 'Brand Name',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text',
      },
      {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [{ type: 'object', fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'href', title: 'Href', type: 'string' },
        ] }],
      },
      {
        name: 'help',
        title: 'Help Section',
        type: 'array',
        of: [{ type: 'object', fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'href', title: 'Href', type: 'string' },
        ] }],
      },
      {
        name: 'newsletterText',
        title: 'Newsletter Text',
        type: 'string',
      },
    ],
  };
  
  export default footer