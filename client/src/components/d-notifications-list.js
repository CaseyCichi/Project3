import React from "react";
import NotificationsListItem from './d-notifications-list-item';
import NoTaskImg from '../images/no-tasks-img.png';


const NotificationsList = (props) => {

	return(
		<div>

		{/*If no items in task list show this:*/}
		<h3 className="grey-header section-header pt-5">No notifications here. You are owl up to date!</h3>
		<img className="d-block mr-auto ml-auto mt-5 p-2 img-fluid" src={NoTaskImg} alt='blah' width={470}/>

		{/*Else, show this:*/}
		<ul id="notifications-list">
			<NotificationsListItem />
		</ul>

		</div>
	);
};




export default NotificationsList;