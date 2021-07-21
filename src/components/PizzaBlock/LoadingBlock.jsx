import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="129" r="126" />
      <rect x="0" y="269" rx="4" ry="4" width="280" height="26" />
      <rect x="0" y="310" rx="4" ry="4" width="280" height="84" />
      <rect x="137" y="412" rx="27" ry="27" width="135" height="44" />
      <rect x="0" y="418" rx="4" ry="4" width="87" height="31" />
    </ContentLoader>
  );
}

export default LoadingBlock;
