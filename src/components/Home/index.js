import React from 'react';
import NewsSlider from '../widgets/NewsSlider';
import NewsList from '../widgets/NewsList';

const Home = () => {
  return (
      <div>
        <NewsSlider
          type="featured"
          start = {0}
          amount = {3}
          settings = {{
            dots: false,
          }}
        />
        <NewsList
          type="card"
          loadMore={true}
          start = {3}
          amount= {3}
        />
      </div>
  )
};

export default Home;
