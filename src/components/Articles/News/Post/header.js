import React from 'react';
import TeamNfo from '../../Elements/teamNfo';
import PostData from '../../Elements/postData';

const Header = (props) => {

  const teamNfo = team => {
    return team ? (
      <TeamNfo team={team} />
    ) : null
  }

  const postData = ({ date, author }) => (
    <PostData date={date} author={author} />
  )

  return (
    <div>
      {teamNfo(props.team)}
      {postData(props.article)}
    </div>
  )
};

export default Header;
