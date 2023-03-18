const router = require('express').Router()

const { createPost, getPosts, updatePost, getPost, deletePost, likePost, getUserPosts, getSavePosts } = require('../controller/postCtrl')
const auth = require('../middleware/auth')

router.route('/posts')
    .post(auth, createPost)
    .get(auth, getPosts)

router.route('/post/:id')
    .patch(auth, updatePost)
    .get(auth, getPost)
    .delete(auth, deletePost)

router.patch('/post/:id/like', auth, likePost)

router.patch('/post/:id/unlike', auth, unLikePost)

router.get('/user_posts/:id', auth, getUserPosts)

router.get('/post_discover', auth, getPostsDicover)

router.patch('/savePost/:id', auth, savePost)

router.patch('/unSavePost/:id', auth, unSavePost)

router.get('/getSavePosts', auth, getSavePosts)


module.exports = router