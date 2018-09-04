import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './CardInfo.css';

const CardInfo = (props) => (
  <div className={styles.cardNfo}>
    <span className={styles.teamName}>
      cavaliers
    </span>
    <span className={styles.date}>
      <FontAwesome
        name="clock-o"
      />
      12/20
    </span>
  </div>
);

export default CardInfo;
