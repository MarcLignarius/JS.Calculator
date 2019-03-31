var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
	return number1 - number2;
};
var multiply = function(number1, number2) {
	return number1 * number2;
};
var divide = function(number1, number2) {
	return number1 / number2;
};

$(function(){
  $("form#selector").submit(function(event){
    var userInput = parseInt($("input:radio[name=operation]:checked").val());
    event.preventDefault();
    if(userInput === 1){
      $("#add").removeClass();
      $("#subtract, #multiply, #divide").addClass("hide");
      $("#add").toggle();
    }else if (userInput === 2){
      $("#subtract").removeClass();
      $("#multiply, #add, #divide").addClass("hide");
      $("#subtract").toggle();
    }else if (userInput === 3){
      $("#multiply").removeClass();
      $("#subtract, #divide, #add").addClass("hide");
      $("#multiply").toggle();
    }else if(userInput === 4){
      $("#divide").removeClass();
      $("#subtract, #add, #multiply").addClass("hide");
      $("#divide").toggle();
    };
  });
  $("#add").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#addoutput").text(number1 + " + " + number2 + " = " + result + ".");
	});
	$("#subtract").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
		$("#subtractoutput").text(number1 + " - " + number2 + " = " + result + ".");
	});
	$("#multiply").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
		$("#multiplyoutput").text(number1 + " x " + number2 + " = " + result + ".");
	});
	$("#divide").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
		$("#divideoutput").text(number1 + " / " + number2 + " = " + result + ".");
	});
});
//
//     event.preventDefault();
//     };
//   });
// });



//
// $(document).ready(function() {
//

//
// });
