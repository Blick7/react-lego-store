import React from 'react';
import ProductsShowcase from '../../UI/ProductsShowcase/ProductsShowcase';

const items = [
  {
    img: 'https://www.lego.com/cdn/cs/set/assets/blte66aadc7d40f3769/10309-10311-HS-202205-SL-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
    title: 'Grow and display your passion',
    description:
      'Enhance your home or office with beautiful LEGO® Botanical sets.',
  },
  {
    img: 'https://www.lego.com/cdn/cs/set/assets/blt3d5d35f37e680cc5/21332-Block-Standard-3.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
    title: 'LEGO® Ideas The Globe',
    description: 'Build a world of your own with this fan-inspired set.',
  },
  {
    img: 'https://www.lego.com/cdn/cs/set/assets/blt89f5d4c1f6521f7e/31207-HS-202208-SL-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
    title: 'Watch joy grow',
    description: 'Botanical magic awaits with the new LEGO® Floral Art set.',
  },
  {
    img: 'https://www.lego.com/cdn/cs/set/assets/bltcf5b9b22a5d7e59a/21334-Soul-202206-2UP-Block-Standard-2.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
    title: 'New LEGO® Ideas Jazz Quartet',
    description:
      'Set the stage for your very own jam session with this fan-inspired set.',
  },
];

const HomeDecorShowcase = () => {
  return <ProductsShowcase title={'Home Decor'} items={items} />;
};

export default HomeDecorShowcase;
