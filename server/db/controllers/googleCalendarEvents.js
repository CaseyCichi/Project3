import Events from '../models/googleCalendarEvent';

var googleAuth = require("./googleauthorize.js");
var Calendarfunction = require("./googleCalendarFunctions");
var TOKEN_PATH = "../../config/googleSecrets/calendar-node-quickstart.json";


function listevents(NameOfCalendar) {
    googleAuth.returnOath(TOKEN_PATH, function (auth) {
      Calendarfunction.listEvents(auth, NameOfCalendar)
    })
  }
  
  function createEventInCalendar(CalendarID, Events) {
    googleAuth.returnOath(TOKEN_PATH, function (auth) {
      Calendarfunction.createEvent(auth, CalendarID, Events);
    })
  }
  
  function createCalendar(NameOfCalendar) {
    googleAuth.returnOath(TOKEN_PATH, function (auth) {
      Calendarfunction.postCreateCalendar(auth, NameOfCalendar);
    })
  }
  
  function deleteCalendar(idOfCalendar){
    googleAuth.returnOath(TOKEN_PATH, function(auth){
      Calendarfunction.deleteCalendar(auth, idOfCalendar);
    })
  }
  
  module.exports = {
    listevents,
    createEventInCalendar,
    deleteCalendar,
    createCalendar,
  }