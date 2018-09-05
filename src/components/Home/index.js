import React from 'react';
import NewsSlider from '../widgets/NewsSlider';
import NewsList from '../widgets/NewsList';
import VideosList from '../widgets/VideosList';

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
        <NewsList
          type = "card"
          start = {3}
          amount = {3}
          loadMore = { true }
         />
         <VideosList
            type="card"
            title={true}
            loadMore={true}
            start={0}
            amount={3}
          />
      </div>
  )
};

export default Home;
