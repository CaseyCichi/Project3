import React, { Component } from 'react';
import TaskListItem from './d-task-list-item';



class TaskList extends Component {

  constructor(props){
    super(props);
  }

  render() {
	return(
		<div>

		<div id="add-task">
			<button type="button" className="btn btn-primary m-3" data-toggle="modal" data-target="#add-task-modal">Add Task</button>
		</div>
		<TaskListItem />
		</div>
	);
};
}




export default TaskList;