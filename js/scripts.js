var pingPong = function(number) {
  var numArray = [];
  for (var i = 1; i <= number; i++) {
    numArray.push(i);
  }
  var counter = 0;
  numArray.forEach(function(num) {
    if (numArray[counter] % 3 === 0 && numArray[counter] % 5 === 0) {
      numArray[counter] = "pingpong";
    } else if (numArray[counter] % 5 === 0) {
      numArray[counter] = "pong";
    } else if (numArray[counter] % 3 === 0) {
      numArray[counter] = "ping";
    }
    counter++;
  });
  return numArray;
};


$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    $("form#ping-pong").each(function() {
      this.reset();
    });
    var result = pingPong(number);
    result.forEach(function(item) {
      $("#result").append("<li>" + item + "</li>");
    });
    $("h3").hide();
    $(".rules").slideUp("fast");
    $("#before").hide();
    $("#after").show();
    $("#result").show();
  });
});
