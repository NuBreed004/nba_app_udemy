import React from 'react';
import SideNav from 'react-simple-sidenav';

const SideNavidation = (props) => (
  <div>
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      onOpenNav={props.onOpenNav}
    >
      Options
    </SideNav>
  </div>
);

export default SideNavidation;
