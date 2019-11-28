var add = function(number1, number2) {
    return number1 + number2;
  };
  
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var resultAdd = add(number1, number2);
  alert(resultAdd);

  var subract = function(number1, number2) {
    return number1 - number2;
  };
  
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var resultSubtract = subract(number1, number2);
  alert(resultSubtract);

  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var resultMultiply = multiply(number1, number2);
  alert(resultMultiply);

  var divide = function(number1, number2) {
    return number1 / number2;
  };
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var resultDivide = divide(number1, number2);
  alert(resultDivide);

  var bodyMassindex = function (weight,height){
    return weight / height;
    };
    var weight = parseInt(prompt("enter your weight"));
    var height = parseInt(prompt("enter your height"));
    var calculate = bodyMassindex(weight,height);
    alert(calculate);