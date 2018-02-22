import React, { Component } from 'react';


var renderCalendar = (CalendarArray) => {
    var renderThis = "https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;";
    console.log("This should be the array");
    console.log(CalendarArray);
    for (var i = 0; i < CalendarArray.length; i++) { 
        renderThis += 'src='+ CalendarArray[i].ID + '%40group.calendar.google.com&amp;color=%' + CalendarArray[i].color + '&amp;'
    }

    renderThis += 'ctz=America%2FLos_Angeles"';
    //console.log(renderThis);
    return renderThis;
}

class Iframe extends Component {
    constructor(props){
        super(props);
        this.state = [{
            
        
    }]
    }    
    

    render(){
    
        return(<div>
            <iframe src={renderCalendar({ID: "gc765tuvssmu50mj9tcgu6m2gk",
            color: "23B1440E",})} height="800" width="600"/>
        </div>)
        
      }
}

var array = [{
    ID:"",
    color:""
}]

export default Iframe;