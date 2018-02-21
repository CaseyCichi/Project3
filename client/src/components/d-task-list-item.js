import React, { Component } from 'react';
import NoTaskImg from '../images/no-tasks-img.png';


class TaskListItem extends Component {
	constructor(props){
		super();
		this.state = {tasks: [1,2,3]}
	}
	componentWillMount(){
		{/*Add connection to db here to pull in task items

		fetch('')
		.then( response => response.json() )
		.then( ({results: tasks}) => this.setState({tasks}))*/}
	}

	checkForTasks =
    	() => {
    	if (this.state.tasks === undefined || this.state.tasks.length === 0) {
        return <div>
		    <h3 className="grey-header section-header pt-5">Go ahead, add a task. It will be a hoot!</h3>
		    <img className="d-block mr-auto ml-auto mt-5 p-2 img-fluid" src={NoTaskImg} alt='No Tasks Img' width={470}/>
        </div>
        }else {
      	return <div>
	      	<ul id="task-list">
				{this.state.tasks.map(task => <li key={task.id}>{task}</li>)}
			</ul>
      	</div>
      }
     };

	render(){
		return (
			<div>
				{this.checkForTasks()}
			</div>
		)
	}
}


export default TaskListItem;