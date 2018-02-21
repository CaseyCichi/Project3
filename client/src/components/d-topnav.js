import React from "react";
import PlusSign from 'react-icons/lib/fa/plus-circle';
import UserIcon from 'react-icons/lib/fa/user';

import {
  NavLink,
} from 'react-router-dom'



const TopNav = (props) => {

	return(
		<section id="top-nav-bar">
			<nav className="navbar navbar-expand-lg navbar-light">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    		<span className="navbar-toggler-icon"></span>
  			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul id="top-nav-left" className="navbar-nav mr-auto">
				<li><NavLink to="/dashboard" >My Tasks</NavLink></li>
				<li><NavLink to="/dashboard/notifications">Notifications</NavLink></li>

				{/*Need to add components to Projects dropdown and modal to new project*/}
				<li className="dropdown">
				<a href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Projects
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<a className="dropdown-item" href="#">Projects Here</a>
					<div className="dropdown-divider"></div>
				</div>
				</li>
				<li className="dropdown">
		        <a className="purple-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          <PlusSign size={23}/>
		        </a>
		        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#add-task-modal">Add Task</a>
		          <div className="dropdown-divider"></div>
		          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#new-project-modal">New Project</a>
		        </div>
		      	</li>
			</ul>
			<ul id="top-nav-right" className="my-2 my-lg-0">

				{/*Below link just needs to display logged in username*/}
				<li>User Name Here</li>

				<li className="dropdown">
				<a className="purple-link" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<UserIcon size={23}/>
				</a> 
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
					<a className="dropdown-item" href="#" data-toggle="modal" data-target="#profile-modal">Profile Settings</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item" href="#">Logout</a>
				</div>
				</li>
			</ul>
			</div>
			</nav>
			
		</section>
	);
};

export default TopNav;