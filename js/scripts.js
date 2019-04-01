//backend logic
$(document).ready(function() {
  $(".quiz").click(function(event){
  
var number1 = parseInt($("input:radio[name=ans1]:checked").val());
var number2 = parseInt($("input:radio[name=ans2]:checked").val());
var number3 = parseInt($("input:radio[name=ans3]:checked").val());
var number4 = parseInt($("input:radio[name=ans4]:checked").val());
var number5 = parseInt($("input:radio[name=ans5]:checked").val());
function add(number1, number2, number3, number4, number5){
  return number1 + number2 + number3 + number4 + number5;
};
var result = add(number1, number2, number3, number4, number5);

$(".dip").text(result);



//frontend logic
if(result >= 40){
   $("#output").text("excellent work.")
} else if (result >= 25 && result < 40) {
  $("#output").text("fairly done.")
}else if (result < 25) {
  $("#output").text("poor work!! retake the test.")
} else {
  $("#output").text("answer every question please!!!")
}
});
});
