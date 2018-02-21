import React, { Component } from 'react';
import NotificationsListItem from './d-notifications-list-item';


class NotificationsList extends Component {

  constructor(props){
    super(props);
  }

  

  render() {

	return(
		<div>
		<NotificationsListItem />
		</div>
	);
};
}


export default NotificationsList;


