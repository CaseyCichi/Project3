import React, { Component } from 'react';


class TaskListItem extends Component {
	constructor(props){
		super();
		this.state = {items: []}
	}
	componentWillMount(){
		{/*Add connection to db here to pull in task items

		fetch('')
		.then( response => response.json() )
		.then( ({results: items}) => this.setState({items}))*/}
	}
	render(){
		let items = this.state.items
		return (
			<div>
				{items.map(item => <li key={item.toString()}>{item}</li>)}
			</div>
		)
	}
}


export default TaskListItem;