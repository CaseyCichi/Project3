import React, { Component } from 'react';


class ProjectName extends Component {

	constructor(props) {
		super(props);
		this.state = {ProjectName: 'Brewery Logo Project'}
	}
	render(){
	return(
		<div>
			<h3 className="dk-blue-header">{this.state.ProjectName}</h3>
		</div>
	);
};
}




export default ProjectName;