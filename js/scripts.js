function add(number1, number2, number3, number4, number5){
  return number1 + number2 + number3 + number4 + number5;
};


$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();
var numb1 = $("input:radio[name=number1]:checked").val();
var numb2 = $("input:radio[name=number2]:checked").val();
var numb3 = $("input:radio[name=number3]:checked").val();
var numb4 = $("input:radio[name=number4]:checked").val();
var numb5 = $("input:radio[name=number5]:checked").val();

var val1 = parseInt(numb1);
var val2 = parseInt(numb2);
var val3 = parseInt(numb3);
var val4 = parseInt(numb4);
var val5 = parseInt(numb5);
var result = (val1 + val2 + val3 + val4 + val5);

$(".dip").text(" Your score is: " + result " points out of 50");

if(result >= 40){
   $("#comment").text("excellent work.")
} else if (result >= 25 && result < 40) {
  $("#comment").text("fairly done")
}else if (result < 25) {
  $("#comment").text("poor work!! retake the test")
} else }
  $("#comment").text("answer every question please!!!")
}
});
});
