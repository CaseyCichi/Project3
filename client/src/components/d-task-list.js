import React, { Component } from 'react';
import TaskListItem from './d-task-list-item';
import NoTaskImg from '../images/no-tasks-img.png';


class TaskList extends Component {

  constructor(props, items){
    super(props);
    this.state = {items}
  }

  showTasks =
    	() => {
      	if (this.state.items === 'undefined' || this.state.items.length === 0) {
        return <div>
		    <h3 className="grey-header section-header pt-5">Go ahead, add a task. It will be a hoot!</h3>
		    <img className="d-block mr-auto ml-auto mt-5 p-2 img-fluid" src={NoTaskImg} alt='blah' width={470}/>
        </div>
      }else {
      	return <div>
      	<ul id="task-list">
			     <TaskListItem />
		    </ul>
      	</div>
      }
  };

  render() {
  console.log(this.state.items)
	return(
		<div>

		<div id="add-task">
			<button type="button" className="btn btn-primary m-3" data-toggle="modal" data-target="#add-task-modal">Add Task</button>
		</div>
		{this.showTasks()}
		</div>
	);
};
}




export default TaskList;