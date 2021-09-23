// handle displaying the time
var rootEl = $("#root");
var Container = $(".container");
var Group1 = $("#input-group1");
var Group2 = $("#input-group2");
var Group3 = $("#input-group3");
var Group4 = $("#input-group4");
var Group5 = $("#input-group5");
var Group6 = $("#input-group6");
var Group7 = $("#input-group7");
var Group8 = $("#input-group8");
var Group9 = $("#input-group9");
var grouplist = [
  Group1,
  Group2,
  Group3,
  Group4,
  Group5,
  Group6,
  Group7,
  Group8,
  Group9,
];

var timeblock = $(".timeblock")
var timeDisplayEl = $("#time-display");
var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
var DivTime = $(".form-control");
var input9 = $("#input-group1")[0];
var input10 = $("#input-group2")[0];
var input11 = $("#input-group3");
var input12 = $("#input-group4")[0];
var input13 = $("#input-group5")[0];
var input14 = $("#input-group6")[0];
var input15 = $("#input-group7")[0];
var input16 = $("#input-group8")[0];
var input17 = $("#input-group9")[0];
var inputlist = [input9, input10, input11, input12, input13, input14, input15, input16, input17]
var Button9 = $("#Button09");
var Button10 = $("#Button10");
var Button11 = $("#Button11");
var Button12 = $("#Button12");
var Button13 = $("#Button13");
var Button14 = $("#Button14");
var Button15 = $("#Button15");
var Button16 = $("#Button16");
var Button17 = $("#Button17");
var Buttonlist = [Button9, Button10, Button11, Button12, Button13, Button14, Button15, Button16, Button17]

var hourtime = moment().format("HH");
var hour1 = $("#hour1");
var hour2 = $("#hour2");
var hour3 = $("#hour3");
var hour4 = $("#hour4");
var hour5 = $("#hour5");
var hour6 = $("#hour6");
var hour7 = $("#hour7");
var hour8 = $("#hour8");
var hour9 = $("#hour9");
var hourlist = [hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9];
var todoList = $("#todo-list");
// var storedTodos = JSON.parse(localStorage.getItem("todos"));




function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
displayTime();
console.log(rightNow);

var todos = {
  9: '',
  10: '',
  11: '',
  12: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
};

// The following function renders items in a todo list as <li> elements
function renderTodos() {
  // Clear todoList element
  // // input11.innerHTML = "";
  // input11.textContent = todos;
  for (var i = 0; i < Buttonlist.length; i++) {
    inputlist[i] = todos[i]

}
}
// This function is being called below and will run when the page loads.
console.log(input11.value);
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

function storeTodos(hour, hourtext) {
  // Stringify and set key in localStorage to todos array
  // input11.value = localStorage.setItem("todos", JSON.stringify(todos));
  todos[hour] = hourtext;
  localStorage.setItem("todos", JSON.stringify(todos));
}
for (var i = 0; i < Buttonlist.length; i++) {
Buttonlist[i].on("click", function (event) {
  event.preventDefault();

  var todoText = inputlist[i];
 

  // Add new todoText to todos array, clear the input
  // input11.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos(i, todoText);
  // renderTodos();

});
}

// Add click event to todoList element

// Calls init to retrieve data and render it to the page on load
init();
// storeTodos(i, todoText);

for (var i = 0; i < hourlist.length; i++) {
  if (hourlist[i].attr("data-hour") < hourtime) {
    grouplist[i].addClass("past");
  } else if (hourtime === hourlist[i].attr("data-hour")) {
    grouplist[i].addClass("present");
  } else {
    grouplist[i].addClass("future");
  }
}
