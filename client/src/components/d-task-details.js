import React from "react";
import CalendarIcon from 'react-icons/lib/fa/calendar';
import PaperclipIcon from 'react-icons/lib/fa/paperclip';



const TaskDetails = (props) => {

	return(
		<div id="task-pane">
		<div id="add-task">
			<ul id="task-details">
				{/*Pull in username/display name that task is assigned to here*/}
				<li>User Name Here</li>

				<li className="">
				<CalendarIcon size={23} color={'#605ca9'}/><input type="date" className="task-date form-control" name="dueDate2" data-placeholder="Due Date" required aria-required="true" />
				</li>
				
				<li className="file-chooser">
	                <input type="file" className="form-control-file chooser" id="addAttachment2" />
	                <a href="#"><PaperclipIcon size={23} color={'#605ca9'}/></a>
              	</li>
			</ul>
		</div>
		<div className="task-details-content p-3">

			{/*Break out below into component */}
			<h3 className="dk-blue-header">Project Name Here</h3>
			
			{/*Break out below into component */}
			<p>Project Details here</p>
			<hr />

			{/*Break out below into component */}
			<p>Project attachments here</p>
			<hr />

			{/*Break out below into component */}
			<ul>
				<li>show comments that have been made here</li>
			</ul>


		</div>
		<div className="comment-section p-3">
			{/*Break out below into component */}
			<form>
			<textarea className="form-control" id="taskDescriptionTextarea2" placeholder="Write a comment..." rows="3"></textarea>
			 <button type="submit" className="btn btn-primary full-width">Submit</button>
            </form>
		</div>

		</div>
	);
};




export default TaskDetails;