/*
 * Post Model with CRUD functions for interacting with file system
 */

//const posts = []; relocated to line 9
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const getPostsFromFile = (callBack) => {
    const postsPath = path.join(rootDir, 'data', 'posts.json');
    fs.readFile(postsPath, (error, postsData) => {
        if (error) {
            return callBack([]);
        }

        return callBack(JSON.parse(postsData));
    });
};

exports.savePost = (post) => {
    const postsPath = path.join(rootDir, 'data', 'posts.json');

    getPostsFromFile((postsData) => {
        postsData.push(post);
        fs.writeFile(postsPath, JSON.stringify(postsData, null, 2), (error) => {
            console.log(error);
        });
    });
};

exports.getAllPosts = (callBack) => {
    getPostsFromFile(callBack);
};

exports.getPostById = (postId, callBack) => {
    getPostsFromFile((posts) => {
        const post = posts.find((p) => p.id.toString() === postId);
        callBack(post);
    });
};

exports.updatePostById = (post, postId) => {
    const postsPath = path.join(rootDir, 'data', 'posts.json');
    getPostsFromFile((posts) => {
        const existingPostIndex = posts.findIndex((prod) => prod.id.toString() === postId);

        const updatedPosts = [...posts];
        updatedPosts[existingPostIndex] = post;
        fs.writeFile(postsPath, JSON.stringify(updatedPosts, null, 2), (error) => {
            console.log(error);
        });
    });
};

exports.deletePostById = (postId, callBack) => {
    const postsPath = path.join(rootDir, 'data', 'posts.json');
    getPostsFromFile((posts) => {
        let updatedPosts = posts.filter((post) => post.id.toString() !== postId.toString());

        fs.writeFile(postsPath, JSON.stringify(updatedPosts, null, 2), (error) => {
            console.log(error);
        });
        callBack();
    });
};

