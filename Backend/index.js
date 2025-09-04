import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import userModel from "./models/user.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

await mongoose.connect("mongodb://127.0.0.1:27017/AptiStep");

app.get('/', (req, res)=>{
    console.log("home page");
})

app.post('/signup', async (req, res)=>{
    const {username, email, password} = req.body;
    const User = await userModel.create({username, email, password});
    res.json(User);
})

app.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const existUser = await userModel.findOne({email});
    if(!existUser) return res.status(400).json({message: "Invalid user or password"});
    const isPassword = await existUser.comparePass(password);
    if(!isPassword){
        return res.status(400).json({message: "Invalid user or password"});
    }
    console.log("login successful")
    res.status(200).json({ message: "Login successful", user: existUser });
})

app.listen("8080", ()=>{
    console.log("server is running on port 8080");
})