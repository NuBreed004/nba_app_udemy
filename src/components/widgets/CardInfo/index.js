import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './CardInfo.css';

const CardInfo = (props) => {

  const teamName = (teams, team) => {
    let data = teams.find((item) => {
      return item.id === team
    })

    return data ? data.name : null
  }

  return (
    <div className={styles.cardNfo}>
      <span className={styles.teamName}>
        { teamName(props.teams, props.team) }
      </span>
      <span className={styles.date}>
        <FontAwesome
          name="clock-o"
        />
        { props.date }
      </span>
    </div>
  )
};

export default CardInfo;
