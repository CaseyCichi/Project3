import React from "react";
import TaskDetails from "./d-task-details"


const ContentRight = (props) => {

	return(
		<section id="main-content-right" className="col mt-4">
			{/*Need to setup child components for contentright*/}
			<TaskDetails />
		</section>
	);
};




export default ContentRight;