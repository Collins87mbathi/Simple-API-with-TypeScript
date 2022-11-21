import mongoose from "mongoose";

export const CONNECTDB = (url:any):void => {
 mongoose.connect(url).then(()=>{
    console.log("connected to a database 🎉🎉"); 
 }).catch((error)=>{
    console.log(error);
    
 })
}