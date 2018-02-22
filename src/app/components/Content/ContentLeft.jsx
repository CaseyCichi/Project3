import React from 'react';
import TaskList from '../TaskList/TaskList';
import GoogleCalendar from '../GoogleCalendar/GoogleCalendar';
import NotificationsList from '../NotificationsList/NotificationsList'

import { Route, Switch } from 'react-router-dom'

const ContentLeft = (props) => {
	return(
		<section id="main-content-left" className="col mt-4">
		<Switch>
			<Route path="/tasks" component={TaskList}/>
			<Route path="/dashboard/notifications" component={NotificationsList}/>
			<Route path="/dashboard/calendar" component={GoogleCalendar}/>
       	</Switch>

		</section>
	);
};


export default ContentLeft;