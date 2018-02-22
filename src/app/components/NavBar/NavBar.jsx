import React from "react";


import {
  NavLink,
} from 'react-router-dom'



const NavBar = (props) => {

	return(
		<nav className="navbar navbar-expand-lg navbar-light nav-white fixed-top">
		<a className="navbar-brand-2" href="#">Navbar</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
			</button>
	  	<div className="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul className="navbar-nav ml-auto nav justify-content-end">
	      <li className="nav-item">
	        <NavLink to="/Login" className="nav-link">Login</NavLink>
	      </li>
	      <li className="nav-item">
	        <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#signup-modal">Signup</a>
	      </li>
	    </ul>
	  	</div>
		</nav>
	);
};

export default NavBar;