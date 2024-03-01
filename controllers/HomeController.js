/*
 * The Home Controller works with the routes/home.js code to READ posts, whether all posts or single posts
 */
const {getAllPosts, getPostById} = require('../models/Post');

// fetch all posts
exports.getHomePage = (req, res) => {
    getAllPosts((posts) => {
        // viewsData variable to be passed to the Home Page view file
        const viewsData = {
            admin: false,
            posts,
            pageTitle: 'Fionn Ross | Capstone Project 3 | Blog Web Application | Posts List'
        };
        res.render('home-page', viewsData);
    });
};

// view single post based on ID
exports.getPostDetailsPage = (req, res) => {
    const postId = req.params.postId;
    getPostById(postId, (post) => {
        const viewsData = {
            admin: false,
            post,
            pageTitle: post.title
        };
        res.render('post-details', viewsData);
    });
};

