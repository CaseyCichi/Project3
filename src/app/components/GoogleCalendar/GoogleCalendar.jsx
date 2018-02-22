import React from "react";

import { NavLink } from 'react-router-dom'

class GoogleCalendar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {ProjectName: 'Calendar'}
    }

    CalendarRender = (ArrayOfCalender) =>{

        var renderThis = 'https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;';
        for (var i = 0; i < ArrayOfCalender.ID.length; i++) { 
            renderThis += 'src='+ ArrayOfCalender.ID[i] + '%40group.calendar.google.com&amp;color=%' + ArrayOfCalender.color[i] + '&amp;'
        }
    
        renderThis += 'ctz=America%2FLos_Angeles" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"';
        return renderThis;
        
    }
    
	render(){

        
		return (
        
        <iframe src={this.CalendarRender}></iframe>
            
        )}
};





export default GoogleCalendar;