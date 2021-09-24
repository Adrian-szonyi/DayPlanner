// handle displaying the time
var rootEl = $("#root");
var Container = $(".container");

var timeblock = $(".timeblock")
var timeDisplayEl = $("#time-display");
var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
var DivTime = $(".form-control");
var input9 = $("#input-group")
var input10 = $("#input-group2")
var input11 = $("#input-group3")
var input12 = $("#input-group4")
var input13 = $("#input-group5")
var input14 = $("#input-group6")
var input15 = $("#input-group7")
var input16 = $("#input-group8")
var input17 = $("#input-group9")
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

var hourtime = moment().format("HH")
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

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
displayTime();

$(".saveBtn").on("click", function() {
var inputvalue = $(this).parent().siblings(".form-control").val()

var Buttonselect = $(this).attr("id")
localStorage.setItem(Buttonselect,inputvalue);
})
var data9am = localStorage.getItem("Button09");
var data9am = localStorage.getItem("Button09");
var data10am = localStorage.getItem("Button10");
var data11am = localStorage.getItem("Button11");
var data12pm = localStorage.getItem("Button12");
var data1pm = localStorage.getItem("Button13");
var data2pm = localStorage.getItem("Button14");
var data3pm = localStorage.getItem("Button15");
var data4pm = localStorage.getItem("Button16");
var data5pm = localStorage.getItem("Button17");
var inputvalue = $(this).parent().siblings(".form-control").val()
function Renderitems() {
if (data9am !== null) {
  $("#input-group").val(data9am)
}
if (data10am !== null) {
  $("#input-group2").val(data10am);
}
if (data11am !== null) {
  $("#input-group3").val(data11am)
}
if (data12pm !== null) {
  $("#input-group4").val(data12pm)
}
if (data1pm !== null) {
  $("#input-group5").val(data1pm)
}
if (data2pm !== null) {
  $("#input-group6").val(data2pm)
}
if (data3pm !== null) {
  $("#input-group7").val(data3pm)
}
if (data4pm !== null) {
  $("#input-group8").val(data4pm)
}
if (data5pm !== null) {
  $("#input-group9").val(data5pm)
}
}
Renderitems();



  if (9 === hourtime){
    $("#input-group").css('background-color', 'rgb(255, 105, 97)');
  }
  else if (9 < hourtime){
    $("#input-group").css('background-color', 'rgb(211, 211, 211)');
  }
  else {
    $("#input-group").css('background-color', 'rgb(119, 221, 119)');
  }
  for (var i = 1; i < hourlist.length; i++) {
  if (hourlist[i].attr("data-hour") < hourtime) {
    inputlist[i].addClass("past");
  } else if (hourtime === hourlist[i].attr("data-hour")) {
    inputlist[i].addClass("present");
  } else {
    inputlist[i].addClass("future");
  }
}
