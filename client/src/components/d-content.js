import React from "react";
import ContentLeft from './d-content-left';
import ContentRight from './d-content-right';


const Content = (props) => {
	if(!ContentRight) {

	}

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