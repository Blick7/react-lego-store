import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store/store';
import ProductAttributes from './ProductAttributes';
import ProductOverview from './ProductOverview';

import classes from './Product.module.scss';

const Product = () => {
  const { itemid } = useParams();
  let productsState = useSelector(
    (state: RootState) => state.products.products
  );
  const product = Object.values(productsState).find(
    (item) => item.id === itemid
  );

  const {
    id,
    title,
    imgUrl,
    bigImgUrl,
    rating,
    price,
    featured,
    pieces,
    ages,
    avaliability,
  } = product!;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.view}>
        <div className={classes.image}>
          <img src={product?.bigImgUrl} alt={product?.title} />
        </div>
        <ProductAttributes ages={ages} pieces={pieces} id={id} />
      </div>
      <ProductOverview product={product!} />
    </section>
  );
};

export default Product;
