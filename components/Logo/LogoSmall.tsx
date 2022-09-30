import React from 'react';
import logo from '../../renderer/tiAcademyLogo.svg';

const LogoSmall = (props: { size: string }) => {
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
        <img src={logo} className="h-8.5 w-[185px] p-2" />
      </a>
    );
  }

  return <>{logoElement}</>;
};

export default LogoSmall;
