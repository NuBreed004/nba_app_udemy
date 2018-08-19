import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../helpers';
import style from './footer.css';

const Footer = () => (
  <footer className={style.footer}>
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="nba logo"/>
    </Link>
    <div className={style.right}>
      @NBA { CURRENT_YEAR } All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
