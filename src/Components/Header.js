import React from 'react';

function Header(props) {
  return (
    <header>
      <img
        src = {props.data}
        alt = "logo"
        onClick= {props.handleHeaderClick}
      />
    </header>
  );
}

export default Header;
