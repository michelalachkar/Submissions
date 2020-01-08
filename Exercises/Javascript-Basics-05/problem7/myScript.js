const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};
let result = "";
for (i = 2; i < 32; i++) {
  if (isPrime(i)) {
    result = result + `${i} `;
  }
}

alert(result);
