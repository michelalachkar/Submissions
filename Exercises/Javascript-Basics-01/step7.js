let shoeSize = prompt("What's your shoe size, Sir?");

let age = prompt("What's your age, Sir?");

let weirdFunction = () => {
  return (shoeSize * 2 + 5) * 50 - age + 1766;
};

alert("Your answer is: " + weirdFunction());
