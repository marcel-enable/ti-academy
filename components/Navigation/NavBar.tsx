import React from 'react';
import { usePageContext } from '../../renderer/usePageContext';
import CurrentUserSmallScreenNavBar from './CurrentUserSmallScreenNavBar';
import CurrentUserNavBar from './CurrentUserNavBar';
import UserLoginNavBar from './UserLoginNavBar';

const NavBar = () => {
  return <UserLoginNavBar />;
};

export default NavBar;
