import React from 'react';
import CookieSignPosting from './CookieSignPosting';
import HomeDecorShowcase from './HomeDecorShowcase';

import MotionBanner from './MotionBanner';
import RecommendedCarousel from './RecommendedCarousel';

const StartingPage = () => {
  return (
    <div>
      <MotionBanner />
      <RecommendedCarousel />
      <CookieSignPosting/>
      <HomeDecorShowcase/>
    </div>
  );
};

export default StartingPage;
