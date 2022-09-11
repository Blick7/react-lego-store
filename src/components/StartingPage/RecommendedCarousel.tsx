import React from 'react';

// Import Swiper React components

import ProductsCarousel from '../../UI/ProductsCarousel/ProductsCarousel';

const items = {
  '75323': {
    productType: 'Sets',
    ages: '9+',
    avaliability: 'Avaliable Now',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/bltf829afe15b940424/75323.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    featured: 'New',
    id: '75323',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/bltf829afe15b940424/75323.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    pieces: 1022,
    price: 169.99,
    rating: 4,
    theme: 'Star Wars',
    title: 'The Justifier™',
  },
  '75313': {
    productType: 'Adults',
    ages: '18+',
    avaliability: 'Avaliable Now',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blta7b7b825b6d4fc0a/75313_Prod.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    featured: 'Hard to find',
    id: '75313',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blta7b7b825b6d4fc0a/75313_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    pieces: 6785,
    price: 849.99,
    rating: 4.78,
    theme: 'Star Wars',
    title: 'AT-AT™',
  },
  '31205': {
    productType: 'Home decor',
    ages: '18+',
    avaliability: 'Avaliable Now',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/bltb448ecfaf6ff0d99/31205.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    featured: '',
    id: '31205',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/bltb448ecfaf6ff0d99/31205.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    pieces: 4167,
    price: 119.99,
    rating: 5,
    theme: 'Batman',
    title: 'Jim Lee Batman™ Collection',
  },
  '31201': {
    productType: 'Home decor',
    ages: '18+',
    avaliability: 'Available now',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt87df18a81b8356a7/31201.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    featured: '',
    id: '31201',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt87df18a81b8356a7/31201.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    pieces: 4249,
    price: 119.99,
    rating: 4,
    theme: 'Harry Potter',
    title: 'Harry Potter™ Hogwarts™ Crests',
  },
  '76393': {
    productType: 'Kids',
    ages: '10+',
    avaliability: 'Available now',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt8c4442c8dd1ff2bf/76393.jpg?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    featured: '',
    id: '76393',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt8c4442c8dd1ff2bf/76393.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    pieces: 1673,
    price: 119.99,
    rating: 4.5,
    theme: 'Harry Potter',
    title: 'Harry Potter & Hermione Granger™',
  },
  '76946': {
    productType: 'Kids',
    ages: '6+',
    avaliability: 'Available now',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt7aa19b6b5edb108d/76946.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    featured: '',
    id: '76946',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt7aa19b6b5edb108d/76946.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    pieces: 181,
    price: 34.99,
    rating: 5,
    theme: 'Jurassic Park',
    title: 'Blue & Beta Velociraptor Capture',
  },
  '42144': {
    productType: 'Sets',
    ages: '9+',
    avaliability: 'Available now',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt0bd92c7560aa9006/42144.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    featured: 'New',
    id: '42144',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt0bd92c7560aa9006/42144.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    pieces: 835,
    price: 149.99,
    rating: 5,
    theme: 'Technic',
    title: 'Material Handler',
  },
  '71775': {
    productType: 'Sets',
    ages: '9+',
    avaliability: 'Available now',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt664c2d4705cfc844/71775.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    featured: 'New',
    id: '71775',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt664c2d4705cfc844/71775.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    pieces: 1003,
    price: 119.99,
    rating: 3,
    theme: 'NINJAGO',
    title: "Nya's Samurai X MECH",
  },
};

const RecommendedCarousel = () => {
  return (
    <section>
      <ProductsCarousel title={'Recommended for You'} items={items} />
    </section>
  );
};

export default RecommendedCarousel;
