import React from "react";
import TaskDetails from "../TaskDetails/TaskDetails"

import './style.css';
const ContentRight = (props) => {

	return(
		<section id="main-content-right" className="col mt-4">
			<TaskDetails />
		</section>
	);
};




export default ContentRight;