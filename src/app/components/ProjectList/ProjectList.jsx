import React from "react";
import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => {
	return(
		<ul className="projects-list">
			<ProjectListItem />
		</ul>
	);
};

export default ProjectList;
