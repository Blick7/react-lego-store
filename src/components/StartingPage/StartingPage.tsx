import React from 'react';
import CookieSignPosting from './CookieSignPosting';
import HomeDecorShowcase from './HomeDecorShowcase';
import KeepInTouch from './KeepInTouch';

import MotionBanner from './MotionBanner';
import RecommendedCarousel from './RecommendedCarousel';

const StartingPage = () => {
  return (
    <div>
      <MotionBanner />
      <RecommendedCarousel />
      <CookieSignPosting />
      <HomeDecorShowcase />
      <KeepInTouch />
    </div>
  );
};

export default StartingPage;
