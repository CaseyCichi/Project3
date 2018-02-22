import React from 'react';
import TaskList from '../TaskList/TaskList';
import GoogleCalendar from '../GoogleCalendar/GoogleCalendar';
import NotificationsList from '../NotificationsList/NotificationsList'

import { Route, Switch } from 'react-router-dom'
import './style.css';
const ContentLeft = (props) => {
	return(
		<section id="main-content-left" className="col mt-4">
		<Switch>
			<Route exact path="/dashboard" component={TaskList}/>
			<Route exact path="/dashboard/notifications" component={NotificationsList}/>
			<Route exact path="/dashboard/calendar" component={GoogleCalendar}/>
       	</Switch>

		</section>
	);
};


export default ContentLeft;