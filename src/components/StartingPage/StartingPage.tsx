import React from 'react';
import HomeDecorShowcase from './HomeDecorShowcase';

import MotionBanner from './MotionBanner';
import RecommendedCarousel from './RecommendedCarousel';

const StartingPage = () => {
  return (
    <div>
      <MotionBanner />
      <RecommendedCarousel />
      <HomeDecorShowcase/>
    </div>
  );
};

export default StartingPage;
