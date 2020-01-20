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
 * @param  {string} input data typed by the user
 * @returns {void}
 */
let argument = "";
let text = "";
function onDataReceived(input) {
  //Clear unwanted white spaces arround our args
  input = input.trim().split(" ");
  //Check if the input has any arguments
  if (input.length > 1) {
    argument = input[1].replace("\n", "");
  }
  //Make sure text ends with an \n
  text = input.shift();

  if (text === "quit" || text === "exit") {
    quit();
  } else if (text === "hello") {
    hello(argument);
  } else if (text === "help") {
    help();
  } else if (text === "list") {
    list(tasks);
  } else if (text === "add") {
    add(input.join(" "));
    list(tasks);
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
 * Says hello to user !
 * And defaults to "" if the user doesn't provide an argument
 *@param {string} argument
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
  hello [name]\t\t\tGreets user
  add [task]\t\t\tAdds [task] to you available tasks
  list\t\t\t\tList all available tasks
  help\t\t\t\tLists available commands
  exit/quit\t\t\tExit application`);
}
let tasks = ["do this", "do that", "do some other stuff"];
/**
 * Lists all tasks
 *
 *@param {array} taksList
 *
 * @returns {void}
 */
function list(tasksList) {
  let result = "Available Tasks\n----------------\n";
  for (i = 0; i < tasksList.length; i++) {
    result += `${i + 1}- ${tasksList[i]}\n`;
  }
  result += "----------------";
  console.log(result);
}

/**
 * Adds a task to the available tasks
 *
 *@param {string} toAdd
 *
 * @returns {void}
 */

function add(task) {
  tasks.push(task);
}
// The following line starts the application
startApp("Michel Al Achkar");
