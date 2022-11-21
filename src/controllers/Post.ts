import {Post} from "../models/Post";
import { IPost } from "../models/PostTypes";
import {ApiError} from "../Error/Error";
import {IReq,INext,IRes} from "../common/index";

export const CreatePost  =  async (req:IReq,res:IRes,next:INext):Promise<any>  => {
  const {title,user,date} = req.body;
  try {
    const post:IPost = await Post.create({
      title,
      user,
      date
    })
   post.save();
   res.status(200).json(post);
  } catch (error) {
    next(ApiError.ApiInternalError("Error in creating post"));
  }
}

export const UpdatePost = async(req:IReq,res:IRes,next:INext) => {
  try {
    const post:IPost|null = await Post.findByIdAndUpdate(req.params.id,{});
    if(!post) return next(ApiError.ApiBadRequest("post not found"));
    res.status(200).json(post);
  } catch (error) {
    next(ApiError.ApiInternalError("something is wrong when updating post"));
  }
};

export const deletePost = async(req:IReq,res:IRes,next:INext) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("post deleted");
  } catch (error) {
    next(ApiError.ApiInternalError("something is wrong when deleting post"));
  }
}

export const getAllPosts = async(req:IReq,res:IRes,next:INext) => {
  try {
    const posts:Object = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(ApiError.ApiInternalError("something is wrong when getting all posts"));
  }
}

export const getPost = async(req:IReq,res:IRes,next:INext) => {
 try {
  const post:IPost | null = await Post.findById(req.params.id);
  if(!post) return next(ApiError.ApiBadRequest("post not found"));
  res.status(200).json(post);
 } catch (error) {
  next(ApiError.ApiInternalError("something is wrong while getting a post"));
 }
}