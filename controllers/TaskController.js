/*
 * The Task Controller works with the routes/tasks.js code to READ tasks from a to-do list as well as delete them
 */
const {getAllTasks, saveTask, deleteTaskById} = require('../models/Task');

// Fetch all tasks
exports.getTasksHomePage = (req, res) => {
    getAllTasks((tasks) => {
        // viewsData variable to be passed to the Home Page view file
        const viewsData = {
            admin: false,
            tasks,
            pageTitle: 'Fionn Ross | Capstone Project 3 | Blog Web Application | To Do List'
        };
        res.render('tasks-home-page', viewsData);
    });
};

// render the ass task view file
exports.getAddTaskPage = (req, res) => {
    // the viewsData variable to be passed to the Add Task page
    const viewsData = {
        edit: false,
        pageTitle: 'Add Task'
    };
    res.render('add-task', viewsData);
};

// add a task
exports.postAddTaskPage = (req, res) => {
    const task = {
        id: Date.now(), // works as a primary key to save the file with a uniqure timestamp
        task: req.body.task
    };
    saveTask(task);
    res.redirect('/tasks');
};

// delete a task
exports.postDeleteTaskPage = (req, res) => {
    const taskId = req.body.taskId;
    deleteTaskById(taskId, () => {
        res.redirect('/tasks');
    });
};
