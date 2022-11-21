import {Document} from "mongoose"

export interface IPost extends Document {
     user:string
     title:string
     date:Date
 }