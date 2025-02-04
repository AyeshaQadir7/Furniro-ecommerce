export interface Product {
  sku: string;
  tags: string[];
  _id: string;
  title: string;
  price: number;
  description: string;
  productImage: string;
  dicountPercentage?: string;
  isNew?: string;
  slug: {
    _type: "slug";
    current: string;
  };
  _type: "product";
  inventory?: number;
}
