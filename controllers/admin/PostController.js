// The Post Controller works with the admin.js to manage the CRUD routes coming in from the Post Controller
const {
    savePost,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById
} = require('../../models/Post');


exports.getAddPostPage = (req, res) => {
    // the viewsData variable to be passed to the Add Post page
    const viewsData = {
        edit: false,
        pageTitle: 'Add Post'
    };
    res.render('add-post', viewsData);
};

exports.postAddPostPage = (req, res) => {
    const post = {
        id: Date.now(), // works as a primary key to save the file with a uniqure timestamp
        title: req.body.title,
        summary: req.body.summary,
        description: req.body.description
    };
    savePost(post);
    res.redirect('/');
};

exports.getAdminPostsPage = (req, res) => {
    getAllPosts((posts) => {
        const viewsData = {
            admin: true,
            pageTitle: 'Admin Posts Management Page',
            posts
        };
        res.render('posts-list', viewsData);
    });
};

exports.getEditPostPage = (req, res) => {
    const postId = req.params.postId;

    getPostById(postId, (post) => {
        const viewsData = {
            edit: true,
            post,
            pageTitle: 'Edit Post'
        };
        res.render('add-post', viewsData);
    });
};

exports.postEditPostPage = (req, res) => {
    const post = {
        id: req.body.postId,
        title: req.body.title,
        summary: req.body.summary,
        description: req.body.description
                //image: req.body.image
    };
    updatePostById(post, req.body.postId);
    res.redirect('/posts');
};

exports.postDeletePostPage = (req, res) => {
    const postId = req.body.postId;
    deletePostById(postId, () => {
        res.redirect('/posts');
    });
};

