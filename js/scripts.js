$(document).ready(function() {
  $("#button").click(function() {

var numb1 = $("input[name=number1]:checked").val();
var numb2 = $("input[name=number2]:checked").val();
var numb3 = $("input[name=number3]:checked").val();
var numb4 = $("input[name=number4]:checked").val();
var numb5 = $("input[name=number5]:checked").val();

var answers = 0

if(numb1=="Netscape"){
  answers++;
}
  if (numb2=="//") {
  answers++;
}
if (numb3=="prompt") {
  answers++;
}
if (numb4=="script") {
  answers++;
}
if (numb5=="a programming language") {
  answers++;
}
document.getElementById('Qans').innerHTML="the result you got is " + answers + " out of the 5 questions you did"
})
})
