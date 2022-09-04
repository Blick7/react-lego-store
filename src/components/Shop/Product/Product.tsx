import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IinitialProducts } from '../../../store/products/types';
import { RootState } from '../../../store/store';
import ProductAttributes from './ProductAttributes';
import ProductOverview from './ProductOverview';

import classes from './Product.module.scss';

const Product = () => {
  const { itemid } = useParams();
  let productsState = useSelector((state: RootState) => state.products);

  const product = productsState.find((item) => item.id === itemid);

  const { id, title, imgUrl, bigImgUrl, rating, price, featured, pieces, age } =
    product!;

  console.log(product);

  return (
    <section className={classes.section}>
      <div className={classes.view}>
        <div className={classes.image}>
          <img src={product?.bigImgUrl} alt={product?.title} />
        </div>
        <ProductAttributes age={age} pieces={pieces} id={id} />
      </div>
      <ProductOverview rating={rating} featured={featured} />
    </section>
  );
};

export default Product;
