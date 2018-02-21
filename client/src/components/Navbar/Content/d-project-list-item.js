import React, { Component } from 'react';


class ProjectListItem extends Component {
	constructor(props){
		super();
		this.state = {projects: ['Project One', 'Project Two']}
	}
	componentWillMount(){
		{/*Add connection to db here to pull in task items

		fetch('')
		.then( response => response.json() )
		.then( ({results: projects}) => this.setState({projects}))*/}
	}
	render(){
		let projects = this.state.projects
		return (
			<div>
				{/*Need to setup a tag to link to project clicked*/}
				{projects.map(project => <li key={project.toString()}><a href="">{project}</a></li>)}
			</div>
		)
	}
}


export default ProjectListItem;