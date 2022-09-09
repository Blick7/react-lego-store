export interface IinitialProducts {
  products: Products;
  status: string;
}

export type Products = {
  [key: string]: Product;
};

export type Product = {
  id: string;
  title: string;
  imgUrl: string;
  bigImgUrl: string;
  rating: number;
  price: number;
  featured: string;
  pieces: number;
  ages: string;
  productType: string;
  theme: string;
  avaliability: string;
};
