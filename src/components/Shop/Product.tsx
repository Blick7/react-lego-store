import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';

const Product = () => {
  const { itemid } = useParams();
  let productsState = useSelector((state: RootState) => state.products);

  const product = productsState.find((item) => item.id === itemid);

  return <div>Product {product?.theme}</div>;
};

export default Product;
