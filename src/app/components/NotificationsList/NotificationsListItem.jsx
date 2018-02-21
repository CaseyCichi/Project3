import React, { Component } from 'react';
import NoTaskImg from '../images/no-tasks-img.png';


class NotificationsListItem extends Component {
	constructor(props){
		super();
		this.state = {notifs: []}
	}
	componentWillMount(){
		{/*Add connection to db here to pull in task items

		fetch('')
		.then( response => response.json() )
		.then( ({results: notifs}) => this.setState({notifs}))*/}
	}

	checkForNotifs =
    	() => {
    	if (this.state.notifs === undefined || this.state.notifs.length === 0) {
        return <div>
		    <h3 className="grey-header section-header pt-5">No notifications here. You are owl up to date!</h3>
			<img className="d-block mr-auto ml-auto mt-5 mb-3 p-2 img-fluid" src={NoTaskImg} alt='blah' width={470}/>
        </div>
        }else {
      	return <div>
	      	<ul id="notifications-list">
				{this.state.notifs.map(notif => <li key={notif.id}>{notif}</li>)}
			</ul>
      	</div>
      }
     };

	render(){
		return (
			<div>
				{this.checkForNotifs()}
			</div>
		)
	}
}


export default NotificationsListItem;