import React from 'react';
import styles from '../index.css';
import VideosTemplate from '../VideosTemplate';

const VideosRelated = (props) => (
  <div className={styles.relatedWrapper}>
    <VideosTemplate
      data={props.data}
      teams={props.teams}
    />
  </div>
);

export default VideosRelated;
