import React from 'react';

// Import Swiper React components

import ProductsCarousel from '../../UI/ProductsCarousel/ProductsCarousel';

const items = [
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt0ba2da641d7f0426/21330_prod.png?fit=bounds&format=png&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Home Alone',
    rating: 3.7,
    tag: 'Hard to Find',
    price: '$299.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt76e8ec83e0664e81/21329.png?fit=bounds&format=png&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 4.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt729f7a96490ebf6f/10304.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 4.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt76e8ec83e0664e81/21329.png?fit=bounds&format=png&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 4.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt5157080434f0c032/76218.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 4.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt76e8ec83e0664e81/21329.png?fit=bounds&format=png&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 1.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt76e8ec83e0664e81/21329.png?fit=bounds&format=png&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 4.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt76e8ec83e0664e81/21329.png?fit=bounds&format=png&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 4.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt76e8ec83e0664e81/21329.png?fit=bounds&format=png&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 4.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt76e8ec83e0664e81/21329.png?fit=bounds&format=png&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 3.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt76e8ec83e0664e81/21329.png?fit=bounds&format=png&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 4.5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
  {
    url: 'https://www.lego.com/cdn/cs/set/assets/blt0254ea3dce736ea0/10305.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    title: 'LEGO® Ideas Fender® Stratocaster™',
    rating: 5,
    tag: 'Hard to Find',
    price: '$119.99',
  },
];

const RecommendedCarousel = () => {
  return <ProductsCarousel title={'Recommended for You'} items={items} />;
};

export default RecommendedCarousel;
