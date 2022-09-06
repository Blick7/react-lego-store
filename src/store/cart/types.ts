import { IinitialProducts } from '../products/types';

interface ICart {
  items: Product[];
  totalQuantity: number;
  totalAmount: number;
}

export type Product = {
  product: IinitialProducts;
  quantity: number;
};

export default ICart;
