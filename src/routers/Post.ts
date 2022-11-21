import express from "express";
import {getAllPosts,getPost,deletePost,UpdatePost,CreatePost } from "../controllers/Post";
const router = express.Router();


router.post('/',CreatePost);
router.get('/:id',getPost);
router.get('/',getAllPosts);
router.delete('/:id',deletePost);
router.put('/:id',UpdatePost);


module.exports = router;