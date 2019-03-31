//backend logic
function add(number1, number2, number3, number4, number5){
  return number1 + number2 + number3 + number4 + number5;
};

$(document).ready(function() {
  $(".quiz").submit(function(event){
    event.preventDefault();
var number1 = parseInt($("input:radio[name=ans1]:checked").val());
var number2 = parseInt($("input:radio[name=ans2]:checked").val());
var number3 = parseInt($("input:radio[name=ans3]:checked").val());
var number4 = parseInt($("input:radio[name=ans4]:checked").val());
var number5 = parseInt($("input:radio[name=ans5]:checked").val());
var result = add()
$(".dip").text(" Your score is: " + result " points out of 50");

//frontend logic
if(result >= 40){
   $("#comment").text("excellent work.")
} else if (result >= 25 && result < 40) {
  $("#comment").text("fairly done.")
}else if (result < 25) {
  $("#comment").text("poor work!! retake the test.")
} else }
  $("#comment").text("answer every question please!!!")
}
});
});
