let result = "";
for (let index = 1; index <= 12; index++) {
  result = result + `${index}: `;
  for (let index2 = 1; index2 <= 12; index2++) {
    result = result + `${index2 * index} `;
  }
  result = result + `\n`;
}
alert(result);
