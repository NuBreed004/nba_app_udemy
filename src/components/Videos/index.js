import React from 'react';
import VideosList from '../widgets/VideosList/index';

const Videos = () => (
  <div>
    <VideosList
      type="card"
      title={true}
      loadMore={true}
      start={0}
      amount={7}
    />
  </div>
);

export default Videos;
