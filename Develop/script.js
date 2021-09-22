// handle displaying the time
var rootEl = $('#root');
var Container = $('.container');
var Group1 = $('#input-group1');
var Group2 = $('#input-group2');
var Group3 = $('#input-group3');
var Group4 = $('#input-group4');
var Group5 = $('#input-group5');
var Group6 = $('#input-group6');
var Group7 = $('#input-group7');
var Group8 = $('#input-group8');
var Group9 = $('#input-group9');
var grouppp = [Group1, Group2, Group3, Group4, Group5, Group6, Group7, Group8, Group9]
var timeDisplayEl = $('#time-display');
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
var DivTime = $('.form-control');
var input11 = $('#11');
var Button11 = $('Button11')

var hour = moment().format('HH')
var hour1 = $('#hour1');
var hour2 = $('#hour2');
var hour3 = $('#hour3');
var hour4 = $('#hour4');
var hour5 = $('#hour5');
var hour6 = $('#hour6');
var hour7 = $('#hour7');
var hour8 = $('#hour8');
var hour9 = $('#hour9');
var hoursss = [hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9]
var todoList = $("#todo-list");
var storedTodos = JSON.parse(localStorage.getItem("todos"));

console.log(hoursss);

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  displayTime();
  console.log(rightNow);

var todos = [];

// The following function renders items in a todo list as <li> elements
function renderTodos() {
  // Clear todoList element and update todoCountSpan
  input11.innerHTML = "";
  input11.textContent = storedTodos;
}
// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // This is a helper function that will render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set key in localStorage to todos array
  input11.value = localStorage.setItem("todos", JSON.stringify(todos));
}

// Add submit event to form
Button11.on("click", function(event) {
  event.preventDefault();

  var todoText = input11.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(input11.value);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// Add click event to todoList element

// Calls init to retrieve data and render it to the page on load
init()



// group should be an array
// time variable should be an array
// loop through one and check to compare the hour time to the moment time and then apply

for (var i = 0; i < hoursss.length; i++) {

  if (hoursss[i].attr('data-hour') < hour) {
    grouppp[i].addClass('past');
  }
  else if (hour === hoursss[i].attr('data-hour')) {
    grouppp[i].addClass('present');
  }
else {
  grouppp[i].addClass('future');
}
}
console.log(hour);



//add a timer at the top that shows current time
//display containers for all work hours 8am to 8pm
//allow users to click on the container and present a form
//form will have input field for todo tasks
//append form input on to container
//change colours of previous containers based on what time it is now 
//button to clear todo from container
