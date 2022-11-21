import mongoose from "mongoose";
import {IPost} from "./PostTypes";
import {Schema, Model,model} from "mongoose";

const PostSchema:Schema = new Schema({
 user: {
    type:String
 },
 title: {
    type:String
 }, 
 date:{
    type:Date,
    default: new Date()
 }
});



export const Post:Model<IPost> = model('Post',PostSchema);


