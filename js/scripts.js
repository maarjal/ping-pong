var numArray = [];
var pingPong = function(number) {
  for (var i = 1; i <= number; i++) {
    numArray.push(i);
  }
    var counter = 0;
    numArray.forEach(function(num) {
      if (numArray[counter] % 3 === 0 && numArray[counter] % 5 === 0) {
        numArray.splice(counter, 1, "pingpong");
      } else if (numArray[counter] % 5 === 0 && numArray[counter] % 3 !== 0) {
        numArray.splice(counter, 1, "pong");
      } else if (numArray[counter] % 3 === 0 && numArray[counter] % 5 !== 0) {
        numArray.splice(counter, 1, "ping");
      }
      counter++;
    });
    return result;
  };



$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    var number = parseInt($("input#number").val());
    $("form#ping-pong").each(function() {
      this.reset();
    });
    var result = pingPong(number);

    var counter = 0;
      numArray.forEach(function(list) {
          $("#result").append("<li>" + numArray[counter] + "</li>");
          counter++;
      });
      $("h3").hide();
      $(".rules").slideUp("fast");
      $("#before").hide();
      $("#after").show();
      $("#result").show();
    });
  });
