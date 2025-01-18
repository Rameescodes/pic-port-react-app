const express = require('express')
const router = express.Router();
const { protect } = require('../middleWare/authMiddleware')
const { addPost,
    getUserPost,
    getPosts,
    getSavedPost,
    savePost,
    likePost,
    reportPost,
    deletePost,
    updatePost,
    getCategories,  
    createCategory

} = require("../controllers/postController")
const {
getCommentsCount,
getComments,    
addComment,
replyComment,
deleteComment,


} = require ("../controllers/commentController")

    
router.post('/add-post', protect, addPost)
router.post('/get-post', protect, getPosts)
router.post("/delete-post", protect, deletePost)
router.put("/edit-post", protect, updatePost)
router.get('/user-post/:userId', protect, getUserPost)
router.post('/save-post', protect, savePost)
router.get('/saved-post/:userId', protect, getSavedPost)
router.post('/like-post',protect,likePost)
router.post('/report-post', protect, reportPost)
router.post('/create-category', protect, createCategory)
router.get('/get-categories/:userId', protect, getCategories)


router.get('/comments-count/:postId', protect, getCommentsCount)
router.get('/get-comments/:postId', protect, getComments)
router.post('/add-comment', protect, addComment)
router.post('/reply-comment', protect, replyComment)
router.delete('/delete-comment', protect, deleteComment)

    



module.exports = router