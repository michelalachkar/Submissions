const stringSize = text => {
  return text.length;
};
const replaceCharacterE = text => {
  return text.replace(/e/, " ");
};
const concatString = (text1, text2) => {
  return text1 + text2;
};
const showChar5 = text => {
  return text[4];
};
const showChar9 = text => {
  return text.substring(0, 9);
};
const toCapitals = text => {
  return text.toUpperCase();
};
const toLowerCase = text => {
  return text.toLowerCase();
};
const removeSpaces = text => {
  return text.trim();
};
const IsString = text => {
  return typeof text == "string";
};

const getExtension = text => {
  return text.substring(text.length - 3, text.length);
};
const countSpaces = text => {
  return text.match(/ /g).length;
};
const InverseString = text => {
  return text
    .split("")
    .reverse()
    .join("");
};

const power = (x, y) => {
  return Math.pow(x, y);
};
const absoluteValue = num => {
  if (num < 0) {
    return num * -1;
  }
};
const absoluteValueArray = array => {
  return array.map(element => {
    if (element < 0) {
      element = element * -1;
    }
    return element;
  });
};
const circleSurface = radius => {
  return Math.round(Math.PI * Math.pow(radius, 2));
};
const hypothenuse = (ab, ac) => {
  return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
};
const BMI = (weight, height) => {
  return parseFloat((weight / Math.pow(height, 2)).toFixed(2));
};

const createLanguagesArray = () => {
  return ["Html", "CSS", "Java", "PHP"];
};

const createNumbersArray = () => {
  return [0, 1, 2, 3, 4, 5];
};

const replaceElement = languages => {
  languages[2] = "Javascript";
  return languages;
};

const addElement = languages => {
  //Or Push :D but this is better
  languages[4] = "Ruby";
  languages[5] = "Python";
  return languages;
};

const addNumberElement = numbers => {
  numbers.unshift(-1);
  numbers.unshift(-2);
  return numbers;
};

const removeFirst = languages => {
  languages.shift();
  return languages;
};

const removeLast = languages => {
  languages.pop();
  return languages;
};

const convertStrToArr = social_arr => {
  return social_arr.split(",");
};

const convertArrToStr = languages => {
  return languages.join(",");
};

const sortArr = social_arr => {
  return social_arr.sort();
};

const invertArr = social_arr => {
  return social_arr.reverse();
};
