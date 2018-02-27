import React from "react";
import ProjectList from './ProjectList';


const SideBar = (props) => {

	return(
		
		<div id="side-nav" className="col-sm-2 col-md-2 col-lg-2 p-3">
			<div className="navbar-brand">
			</div>
			<h6 className="grey-header projects pt-5">Projects</h6>
			<ProjectList />
		</div>
		
	);
};




export default SideBar;