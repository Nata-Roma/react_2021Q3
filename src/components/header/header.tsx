import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="header_wrapper">
      <NavLink exact to="/" className="header_link" activeClassName="active">Home</NavLink>
      <NavLink to="/about" className="header_link" >About</NavLink>
    </div>
  );
};

export default Header;
