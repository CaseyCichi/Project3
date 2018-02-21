import React, { Component } from 'react';
import NotificationsListItem from './d-notifications-list-item';
import NoTaskImg from '../images/no-tasks-img.png';


class NotificationsList extends Component {

  constructor(props, notifs){
    super(props);
    this.state = {notifs}
  }

  showNotifs =
    	() => {
      	if (this.state.notifs.length <= 0) {
        return <div>
        {/*If no notifs in task list show this:*/}
		    <h3 className="grey-header section-header pt-5">No notifications here. You are owl up to date!</h3>
			<img className="d-block mr-auto ml-auto mt-5 p-2 img-fluid" src={NoTaskImg} alt='blah' width={470}/>
        </div>
      }else {
      	return <div>
        {/*else show this:*/}
      	<ul id="notifications-list">
			<NotificationsListItem />
		</ul>
      	</div>
      }
  };

  render() {

	return(
		<div>
		{this.showNotifs()}
		</div>
	);
};
}


export default NotificationsList;


