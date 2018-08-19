import React from 'react';
import NewsSlider from '../widgets/NewsSlider';

const Home = () => (
  <div>
    <NewsSlider
      type="featured"
      from = {3}
      to= {7}
    />
  </div>
);

export default Home;
