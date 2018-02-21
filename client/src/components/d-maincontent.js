import React from "react";
import TopNav from './d-topnav';
import TaskBar from './d-taskbar';
import Content from './d-content';



const MainContent = (props) => {

	return(
		<div className="col-sm-12 col-md-10 col-lg-10">
			<TopNav />
			<TaskBar />
			<Content />
		</div>
	);
};


export default MainContent;