import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from '../SideNav';

const Header = (props) => {

  const logo = () => (
      <Link to="/">
        <img className={style.logo} src="/images/nba_logo.png" alt="nba logo"/>
      </Link>
    )


  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome name="bars"
        onClick={props.onOpenNav}
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer'
        }}
      />
    </div>
  )

  return (
      <header className={style.header}>

        <SideNav {...props} />

        <div className={style.headerOpt}>
          { navBars() }
          { logo() }
        </div>
      </header>
  )
};

export default Header;
