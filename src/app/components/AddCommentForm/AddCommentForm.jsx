import React from "react";

class AddCommentForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
	  comment: '',
	};
	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  	}

	handleSubmit(event) {
	{/*Need to setup POST to db here*/}

	 alert('Comment: ' + this.state.comment);
     event.preventDefault();
     this.resetForm();
  	}

  	resetForm() {
  	this.setState({
    comment: '',
  	});
	}

	render(){
		return(
		<form onSubmit={this.handleSubmit}>
            <div className="form-group">
           		 <textarea 
           		 className="form-control" 
           		 name="comment" 
           		 value={this.state.comment}
    			 onChange={this.handleChange} rows="3">
    			 </textarea>
            </div>
			<input type="submit" value="Submit" className="btn btn-primary full-width" />
		</form>
		);
	}
};

export default AddCommentForm;

