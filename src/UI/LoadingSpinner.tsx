import React from 'react';

import { TailSpin } from 'react-loading-icons';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TailSpin
        fill="#06bcee"
        fillOpacity={1}
        height="4em"
        width="5em"
        speed={1}
        strokeOpacity={1}
        strokeWidth={4}
        stroke="rgb(255, 207, 0)"
      />
    </div>
  );
};

export default LoadingSpinner;
