import React from 'react';
import NewsSlider from '../widgets/NewsSlider';
import NewsList from '../widgets/NewsList';
import VideosList from '../widgets/VideosList';

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
<<<<<<< HEAD
          type="card"
          loadMore={true}
          start = {3}
          amount= {3}
        />
=======
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
>>>>>>> 48cd0a41c22aa0be271ce994e9d7d9cbfd22a457
      </div>
  )
};

export default Home;
