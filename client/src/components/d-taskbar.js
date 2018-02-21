import React from "react";

import {
  NavLink,
} from 'react-router-dom'



class TaskBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {ProjectName: 'My Personal Tasks'}
	}

	render(){
		return(
		<section id="task-bar">
			{/*Need to setup this h3 below to bring in current project name that user is viewing, if no projects default to "My Personal Tasks" */}
			<h3 className="dk-blue-header section-header pt-3">{this.state.ProjectName}</h3>
			<ul id="task-nav">
				<li><NavLink exact to="/dashboard">My Tasks</NavLink></li>
				<li><NavLink to="/dashboard/calendar" >Calendar</NavLink></li>
			</ul>
		</section>
		);
	}
};




export default TaskBar;