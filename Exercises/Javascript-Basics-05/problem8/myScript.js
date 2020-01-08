let guess = parseInt(prompt("Try n guess, remember you have 8 tries"));

let actualNum = Math.floor(Math.random() * 101);
console.log(actualNum);
for (let index = 1; index <= 8; index++) {
  if (guess == actualNum) {
    alert(`wow you did it with ${index} tries`);
    break;
  } else if (index == 8) {
    alert("you lost");
    break;
  } else if (guess < actualNum) {
    guess = parseInt(
      prompt(
        `the number you picked is less than the actual value, try again\nTries Left:${8 -
          index}`
      )
    );
  } else if (guess > actualNum) {
    guess = parseInt(
      prompt(
        `the number you picked is greater than the actual value, try again\nTries Left:${8 -
          index}`
      )
    );
  }
}
