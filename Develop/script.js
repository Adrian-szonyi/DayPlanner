// handle displaying the time
var rootEl = $('#root');
var Container = $('.container');
var Group = $('.input-group');
var timeDisplayEl = $('#time-display');
var timetable = $("<li>");
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
var DivTime = $('.form-control');
var tume = $('.input-group-text hour')
var hour = moment().format('HH')
var a = $('#23');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  displayTime();
  console.log(rightNow);

  if (hour > tume) {
    Group.addClass('past');
  }
  else if (hour === a) {
    Group.addClass('present');
  }
else {
  Group.addClass('future');
}
console.log(hour);
console.log(a)


//add a timer at the top that shows current time
//display containers for all work hours 8am to 8pm
//allow users to click on the container and present a form
//form will have input field for todo tasks
//append form input on to container
//change colours of previous containers based on what time it is now 
//button to clear todo from container
