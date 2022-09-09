import ICart from '../store/cart/types';

export const setLocalStorage = ({
  items,
  totalQuantity,
  totalAmount,
}: ICart) => {
  localStorage.setItem('itemsCart', JSON.stringify(items));
  localStorage.setItem('totalQuantityCart', JSON.stringify(totalQuantity));
  localStorage.setItem('totalAmountCart', JSON.stringify(totalAmount));
};

export default setLocalStorage;
