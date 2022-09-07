import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
const Navbar=()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/" style={{color:'violet'}}>ChennaTechnical</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink exact className="nav-link" to="/" activeClassName='menu_active'>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about"  activeClassName='menu_active'>About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/services"  activeClassName='menu_active'>Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact"  activeClassName='menu_active'>Contact</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
        </>
        );
};
export default Navbar;