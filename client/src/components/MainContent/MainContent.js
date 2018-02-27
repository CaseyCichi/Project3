import React from "react";
import TopNav from '../TopNav/TopNav';
import TaskBar from '../TaskBar/TaskBar';
import Content from '../Content/Content';



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