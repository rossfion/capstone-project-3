const express = require('express');
const router = express.Router();

/*
 * tasks.js manages the READ routes from the Task Controller
 */
const {
    getTasksHomePage,
    getAddTaskPage,
    postAddTaskPage,
    postDeleteTaskPage
} = require('../controllers/TaskController');

router.get('/', getTasksHomePage);
router.get('/add', getAddTaskPage);
router.post('/add', postAddTaskPage);
router.post('/delete', postDeleteTaskPage);

module.exports = router;