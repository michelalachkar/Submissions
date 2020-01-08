let given = prompt("Please enter a number and what you wish to do(x or +): ");

let data = given.split(" ");

let number = parseInt(data[0]);
let decision = data[1];
let result = 0;
switch (decision) {
  case "+":
    for (let index = 1; index <= number; index++) {
      result += index;
    }
    break;
  case "x":
    result = 1;
    for (let index = 1; index <= number; index++) {
      result *= index;
    }
    break;
  default:
    break;
}

alert(result);
