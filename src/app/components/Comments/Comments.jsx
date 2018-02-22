import React, { Component } from 'react';


class Comments extends Component {
	constructor(props){
		super();
		this.state = {comments: ['Comment One', 'Comment Two']}
	}
	componentWillMount(){
		{/*Add connection to db here to pull in task items

		fetch('')
		.then( response => response.json() )
		.then( ({results: projects}) => this.setState({projects}))*/}
	}
	render(){
	let comments = this.state.comments
	return(
		<div>
			{comments.map(comment => <li key={comment.toString()}>{comment}</li>)}
		</div>
	);
};
}




export default Comments;