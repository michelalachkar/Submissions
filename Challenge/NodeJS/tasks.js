/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
let argument = "";
let text = "";
function onDataReceived(input) {
  //Clear unwanted white spaces arround our args
  input = input.trim();
  //Check if the input has any arguments
  if (input.split(" ").length > 1) {
    argument = input.split(" ")[1].replace("\n", "");
  }
  //Make sure text ends with an \n
  text = input.split(" ")[0];

  if (text === "quit" || text === "exit") {
    quit();
  } else if (text === "hello") {
    hello(argument);
  } else if (text === "help") {
    help();
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(argument = "") {
  if (argument !== "") {
    console.log(`hello ${argument}!`);
  } else {
    console.log("hello!");
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}
/**
 * Lists all available commands
 *
 * @returns {void}
 */
function help() {
  console.log(`
  Command\t\t\tWhat it does
  -------\t\t\t-----------------
  hello [arg]\t\t\tGreets user
  help\t\t\t\tLists available commands
  exit/quit\t\t\tExit application`);
}

// The following line starts the application
startApp("Michel Al Achkar");
