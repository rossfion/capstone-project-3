/*
 * Task Model with CRUD functions for interacting with the file system
 * File are saved and/or deleted, although they are not edited.
 */

//const posts = []; relocated to line 9
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const getTasksFromFile = (callBack) => {
    const tasksPath = path.join(rootDir, 'data', 'tasks.json');
    fs.readFile(tasksPath, (error, tasksData) => {
        if (error) {
            return callBack([]);
        }

        return callBack(JSON.parse(tasksData));
    });
};

exports.getAllTasks = (callBack) => {
    getTasksFromFile(callBack);
};

exports.saveTask = (task) => {
    const tasksPath = path.join(rootDir, 'data', 'tasks.json');

    getTasksFromFile((tasksData) => {
        tasksData.push(task);
        fs.writeFile(tasksPath, JSON.stringify(tasksData, null, 2), (err) => {
            if (err)
                throw err;
            console.log(err);
        });
    });
};

exports.deleteTaskById = (taskId, callBack) => {
    const tasksPath = path.join(rootDir, 'data', 'tasks.json');
    getTasksFromFile((tasks) => {
        let updatedTasks = tasks.filter((task) => task.id.toString() !== taskId.toString());

        fs.writeFile(tasksPath, JSON.stringify(updatedTasks, null, 2), (error) => {
            console.log(error);
        });
        callBack();
    });
};