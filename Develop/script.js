// handle displaying the time
var rootEl = $('#root');
var Container = $('.container');
var Group = $('.input-group');
var timeDisplayEl = $('#time-display');
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
var DivTime = $('.form-control');

var time = $('.input-group-text-hour')
var hour = moment().format('HH')
var hour1 = $('.hour1');
var hour2 = $('.hour2');
var hour3 = $('.hour3');
var hour4 = $('.hour4');
var hour5 = $('.hour5');
var hour6 = $('.hour6');
var hour7 = $('.hour7');
var hour8 = $('.hour8');
var hour9 = $('.hour9');
var hour10 = $('.hour10');
var hoursss = [hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9, hour10]

console.log(hoursss);

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  displayTime();
  console.log(rightNow);


  var x = hour4.getAttribute("data-hour")
console.log(x);

// group should be an array
// time variable should be an array
// loop through one and check to compare the hour time to the moment time and then apply

for (var i = 0; i < hoursss.length; i++) {

  if (hoursss[i].getAttribute('data-hour') < hour) {
    Group.addClass('past');
  }
  else if (hour === hoursss[i].getAttribute('data-hour')) {
    Group.addClass('present');
  }
else {
  Group.addClass('future');
}
}
console.log(rightNow);

for (var i = 0; i < hoursss.length; i++) {

console.log(hoursss[i].getAttribute('data-hour'));

}



//add a timer at the top that shows current time
//display containers for all work hours 8am to 8pm
//allow users to click on the container and present a form
//form will have input field for todo tasks
//append form input on to container
//change colours of previous containers based on what time it is now 
//button to clear todo from container
