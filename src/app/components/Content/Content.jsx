import React from "react";
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import './style.css';
const Content = (props) => {
	return(
		<div className="row no-gutters">
			{/*Need to setup so that only contentleft shows until a li item is clicked then 
			contentright will show, conditional rendering*/}
			<ContentLeft />
			<ContentRight />
		</div>
	);
};




export default Content;