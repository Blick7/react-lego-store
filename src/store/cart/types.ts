import { IinitialProducts } from '../products/types';

interface ICart {
  items: IinitialProducts[];
  totalQuantity: number;
  totalAmount: number;
}

export default ICart;
