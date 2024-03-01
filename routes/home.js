const express = require('express');
const router = express.Router();

/*
 * home.js manages the READ routes from the Home Controller
 */
const {
    getHomePage,
    getPostDetailsPage,
    getToDoListPage
} = require('../controllers/HomeController');

router.get('/', getHomePage);
router.get('/post/details/:postId', getPostDetailsPage);

module.exports = router;