import { NextFunction,Request,Response } from "express";
import {ApiError} from "../Error/Error";

export const ErrorHandler = (err:any,req:Request,res:Response,next:NextFunction) => {
 if(err instanceof ApiError) {
    res.status(err.status).json(err.message);
    return;
 }
 res.send(500).json("internal server error");
}