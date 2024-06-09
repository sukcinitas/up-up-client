import React from 'react';

import '../../sass/index.scss';
import '../../sass/PageLoader.scss';

const PageLoader = () => (
  <div className="page-loader">
    <h2 className="heading">
      The app is starting up. Please hold on for a moment.
    </h2>
    <div className="page-loader__rect">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default PageLoader;
