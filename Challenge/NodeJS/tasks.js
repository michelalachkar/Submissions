const fs = require("fs");

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
let tasks = [];
let myDb = "";

function startApp(name) {
  if (process.argv.length === 2) {
    myDb = "./database.json";
  } else {
    myDb = process.argv[2];
  }
  if (fs.existsSync(myDb)) {
    fs.readFile(myDb, (err, data) => {
      if (err) {
        throw err;
      }
      tasks = JSON.parse(data);
    });
  } else {
    let data = JSON.stringify(tasks);
    fs.appendFileSync(myDb, data);

    fs.readFileSync(myDb, (err, data) => {
      if (err) {
        throw err;
      }
      tasks = JSON.parse(data);
    });
  }

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
    argument = input[1];
  }
  text = input[0];
  if (text === "quit" || text === "exit") {
    persist(tasks);
    quit();
  } else if (text === "hello") {
    input.shift();
    hello(input.join(" "));
  } else if (text === "help") {
    help();
  } else if (text === "list") {
    list(tasks);
  } else if (text === "add") {
    input.shift();
    if (input.join(" ") === "") {
      console.log("please provide us with a task");
    } else {
      add(input.join(" "));
      list(tasks);
    }
  } else if (text === "remove") {
    if (parseInt(argument)) {
      remove(argument);
      argument = "";
    } else {
      remove();
    }
  } else if (text === "edit") {
    input.shift();
    if (parseInt(input[0])) {
      let taskId = input.shift();
      let newText = input.join(" ");
      edit(newText, taskId);
    } else {
      let newText = input.join(" ");
      edit(newText);
    }
  } else if (text === "check") {
    check(input[1]);
  } else if (text === "uncheck") {
    uncheck(input[1]);
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
  remove [id]\t\t\tRemove task with id [id]
  remove\t\t\tRemove the last task
  edit [id] [text]\t\tEdits task with id [id]
  edit [text]\t\t\tEdits last task in list
  check [id]\t\t\tMarks task with id [id] as done
  uncheck [id]\t\t\tMarks task with id [id] as not done
  help\t\t\t\tLists available commands
  exit/quit\t\t\tExit application`);
}

/**
 * Lists all tasks
 *
 *@param {array} taksList
 *
 * @returns {void}
 */
function list(tasksList) {
  let result = "----------------\nAvailable Tasks\n----------------\n";
  for (i = 0; i < tasksList.length; i++) {
    let checkMark = "";
    if (tasksList[i].done) {
      checkMark = "✓";
    } else {
      checkMark = "x";
    }
    result += `${i + 1} - [${checkMark}] ${tasksList[i].description}\n`;
  }
  result += "----------------";
  console.log(result);
}

/**
 * Adds a task to the available tasks
 *
 *@param {string} task
 *
 * @returns {void}splice(tasks.length,1)
 */

function add(task) {
  let taskObject = {
    description: task,
    done: false
  };
  tasks.push(taskObject);
}
/**
 * Removes task with the taskId provided, or the last
 * task if nothing was provided
 *
 *@param {integer} taskId
 *
 * @returns {void}
 */
function remove(taskId = 0) {
  if (taskId > tasks.length) {
    console.log("id doesn't exit, please select a proper id");
  } else if (taskId !== 0) {
    tasks.splice(parseInt(taskId - 1), 1);
    list(tasks);
  } else {
    tasks.pop();
    list(tasks);
  }
}

/**
 * Edits task with the taskId provided, or the last
 * task if nothing was provided
 *
 *@param {integer} taskId
 *@param {string} newText
 *
 * @returns {void}
 */

function edit(newText = "", taskId = 0) {
  if (newText === "") {
    console.log("Error!!");
  } else if (taskId === 0) {
    tasks[tasks.length - 1].description = newText;
  } else {
    tasks[taskId - 1].description = newText;
  }
}

/**
 * Marks a task as done
 *
 *@param {integer} taskId
 *
 *
 * @returns {void}
 */

function check(taskId) {
  if (parseInt(taskId)) {
    tasks[taskId - 1].done = true;
  } else {
    console.log("Error!!");
  }
}
/**
 * Marks a task as not done
 *
 *@param {integer} taskId
 *
 *
 * @returns {void}
 */

function uncheck(taskId) {
  if (parseInt(taskId)) {
    tasks[taskId - 1].done = false;
  } else {
    console.log("Error!!");
  }
}

/**
 * Persist data to a json file
 *
 *@param {array} tasks
 *
 *
 * @returns {void}
 */

function persist(toBeSaved) {
  let data = JSON.stringify(toBeSaved);
  fs.writeFileSync(myDb, data);
}
// The following line starts the application
startApp("Michel Al Achkar");
