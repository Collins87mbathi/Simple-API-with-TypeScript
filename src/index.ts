import express,{Express} from "express";
import { ErrorHandler } from "./ErrorHandler/ErrorHandler";
import {CONNECTDB} from "./Database/connect";
import dotenv from "dotenv";
const app:Express = express();
dotenv.config();
const port = process.env.PORT;

//middleware
app.use(express.json());

//Database Connection
CONNECTDB(process.env.MONGO_DB_URL);

//routers
app.use('/api/post',require("./routers/Post"));

//ErrorHandler
app.use(ErrorHandler);

app.listen(port, () :void => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});