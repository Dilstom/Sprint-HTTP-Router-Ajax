import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
 return (
  <div className="navBar">
   <ul>
    <li>
     <NavLink exact to="/" activeClassName="activeNav">
      Smurf Village
     </NavLink>
    </li>
    <li>
     <NavLink to="/smurf-form" activeClassName="activeNav">
      Add new Smurf
     </NavLink>
    </li>
   </ul>
  </div>
 );
};

export default NavBar;
