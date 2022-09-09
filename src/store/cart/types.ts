import { Product } from '../products/types';

interface ICart {
  items: Item[];
  totalQuantity: number;
  totalAmount: number;
}

export type Item = {
  product: Product;
  quantity: number;
};

export default ICart;
