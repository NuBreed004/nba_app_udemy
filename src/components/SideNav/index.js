import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from '../SideNav/SideNavItems';


const SideNavidation = (props) => (
  <div>
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      onOpenNav={props.onOpenNav}
      navStyle={{
        background: '#242424',
        maxWidth: '220px'
      }}
    >
      <SideNavItems />
    </SideNav>
  </div>
);

export default SideNavidation;
