import express from "express";
import UsersController from "./controllers/users/users-controller.js";
import PostsController from "./controllers/posts/posts-controller.js";
import cors from 'cors';
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());

UsersController(app)
PostsController(app)


app.listen(process.env.PORT || 4000)