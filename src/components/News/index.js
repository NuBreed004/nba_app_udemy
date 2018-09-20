import React from 'react';
import NewsSlider from '../widgets/NewsSlider/index';
import NewsList from '../widgets/NewsList/index';

const News = (props) => (
  <div>
    <NewsSlider
      type="featured"
      from={3}
      to={7}
      settings={{
        dots: false
      }}
    />
    <NewsList
      type="newsCard"
      start={2}
      amount={7}
      loadMore={true}
    />
  </div>
);

export default News;
