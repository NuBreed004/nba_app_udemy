import React from 'react';
import NewsSlider from '../widgets/NewsSlider';
import NewsList from '../widgets/NewsList';

const Home = () => {
  return (
      <div>
        <NewsSlider
          type="featured"
          from = {3}
          to= {7}
          settings={{
            dots: false,
          }}
        />
        <NewsList />
      </div>
  )
};

export default Home;
