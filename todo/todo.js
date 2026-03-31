const fs = require('fs');
const filepath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filepath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filepath, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({ task });
    saveTasks(tasks);
    console.log("Task added:", task);
}

const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((t, index) => {
        console.log(index + ":", t.task);
    });
}

const removeTask = (index) => {
    const tasks = loadTasks();
    const updatedTasks = tasks.filter((_, i) => i !== index);
    saveTasks(updatedTasks);
    console.log("Task removed");
}

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
    addTask(argument);
}
else if (command === "list") {
    listTasks();
}
else if (command === "remove") {
    removeTask(parseInt(argument));
}
else {
    console.log("Invalid command. Use: add, list, remove");
}