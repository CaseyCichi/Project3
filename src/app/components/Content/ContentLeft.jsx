import React, { Component } from 'react';
import TaskList from './d-task-list';
import GoogleCalendar from './d-google-calendar';
import NotificationsList from './d-notifications-list'
 

import {
  Route, Switch
} from 'react-router-dom'

class ContentLeft extends Component {

	render(){
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
}


export default ContentLeft;