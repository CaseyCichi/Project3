import React, { Component } from 'react';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import PaperclipIcon from 'react-icons/lib/fa/paperclip';
import ProjectName from './d-project-name';
import TaskDesc from './d-task-desc';
import TaskAttachments from './d-task-attachments';
import Comments from './d-comments';
import AddCommentForm from './d-add-comment-form';


class TaskDetails extends Component {


	render(){
	return(
		<div id="task-pane">
		<div id="add-task">
			<ul id="task-details">
				{/*Pull in username/display name that task is assigned to here*/}
				<li>User Name Here</li>

				<li className="">
				<CalendarIcon size={23} color={'#605ca9'}/>
				<input type="date" name="dueDate"  className="task-date form-control" />
				</li>
				
				<li className="file-chooser">
	                <input type="file" className="form-control-file chooser" id="addAttachment2" />
	                <a href="#"><PaperclipIcon size={23} color={'#605ca9'}/></a>
              	</li>
			</ul>
		</div>
		<div className="task-details-content p-3">

			<ProjectName />
			
			<TaskDesc />

			<TaskAttachments />

			<ul>
				<Comments />
			</ul>
		</div>
		<div className="comment-section p-3">

			<AddCommentForm />
		</div>

		</div>
	);
};
}




export default TaskDetails;