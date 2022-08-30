import React from 'react';

import classes from './ProductsShowcase.module.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
interface IProps {
  title: string;
  items: {
    img: string;
    title: string;
    description: string;
  }[];
}

const ProductsShowcase = (props: IProps) => {
  return (
    <section className={classes.container}>
      <h2>{props.title}</h2>
      <div className={classes.items}>
        {props.items.map((item, index) => {
          return (
            <div className={classes.item} key={index}>
              <div className={classes.image}>
                <img src={item.img} alt={item.title}></img>
              </div>
              <h3>{item.title}</h3>
              <div className={classes.description}>{item.description}</div>
              <div className={classes.button}>
                <span>Show now</span>
                <KeyboardArrowRightIcon />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsShowcase;
