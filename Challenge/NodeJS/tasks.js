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
    argument = input[1];
  }
  text = input[0];
  if (text === "quit" || text === "exit") {
    quit();
  } else if (text === "hello") {
    hello(argument);
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
  help\t\t\t\tLists available commands
  exit/quit\t\t\tExit application`);
}
let tasks = [
  {
    description: "this",
    done: false
  },
  {
    description: "that",
    done: false
  },
  {
    description: "something",
    done: false
  },
  {
    description: "something else",
    done: true
  },
  {
    description: "abcd",
    done: false
  },
  {
    description: "wxyz",
    done: false
  }
];
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
// The following line starts the application
startApp("Michel Al Achkar");
