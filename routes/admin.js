const express = require('express');
const router = express.Router();
/*
 * admin.js manages the CRUD routes coming in from the Post Controller
 */
const {
    getAddPostPage,
    postAddPostPage,
    getAdminPostsPage,
    getEditPostPage,
    postEditPostPage,
    postDeletePostPage
} = require('../controllers/admin/PostController');

router.get('/', getAdminPostsPage);
router.get('/add', getAddPostPage);
router.post('/add', postAddPostPage);
router.get('/edit/:postId', getEditPostPage);
router.post('/edit', postEditPostPage);
router.post('/delete', postDeletePostPage);

module.exports = router;