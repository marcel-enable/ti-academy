import React from 'react';
import logo from '../../renderer/defaultLogo.svg';

const Logo = (props: { size: string }) => {
  let logoElement;
  if (props.size === 'large') {
    logoElement = (
      <a href="/">
        <img src={logo} className="h-14" />
      </a>
    );
  } else if (props.size === 'small') {
    logoElement = (
      <a href="/">
        <img src={logo} className="h-9" />
      </a>
    );
  } else {
    logoElement = (
      <a href="/">
        <img src={logo} className="h-10.5 w-10.5"  />
      </a>
    );
  }

  return <>{logoElement}</>;
};

export default Logo;
