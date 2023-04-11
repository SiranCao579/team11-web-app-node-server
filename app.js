import express from "express";
import UsersController from "./controllers/users/users-controller.js";
import cors from 'cors';
import mongoose from "mongoose";

const CONNECTION_STRING = "mongodb+srv://WebDevTeam11:GueSHKaCHfh9dPoH@cluster0.8ybajpz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());

UsersController(app)


app.listen(process.env.PORT || 4000)