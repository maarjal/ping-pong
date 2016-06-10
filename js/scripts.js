var numArray = [];
var result;
var pingPong = function(number) {
  for (var i = 1; i <= number; i++) {
    numArray.push(i);
    if (i % 15 === 0) {
        numArray.splice(i-1, 1, "pingpong");
      }
    } 
  return result;
};



$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    $("form#ping-pong").each(function() {
      this.reset();
    });
    var result = pingPong(number);

    var counter = 0;
      numArray.forEach(function(list) {
          $(".list").append("<li>" + numArray[counter] + "</li>");
          counter++;
      });
      $("#result").show();
    });
  });
