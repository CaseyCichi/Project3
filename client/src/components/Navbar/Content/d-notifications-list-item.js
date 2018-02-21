import React, { Component } from 'react';


class NotificationsListItem extends Component {
	constructor(props){
		super();
		this.state = {notifs: ['Notification One', 'Notification Two']}
	}
	componentWillMount(){
		{/*Add connection to db here to pull in task items

		fetch('')
		.then( response => response.json() )
		.then( ({results: notifs}) => this.setState({notifs}))*/}
	}
	render(){
		let notifs = this.state.notifs
		return (
			<div>
				{notifs.map(notif => <li key={notif.toString()}>{notif}</li>)}
			</div>
		)
	}
}


export default NotificationsListItem;