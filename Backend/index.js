const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
     origin: "http://localhost:5173",   
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true   
}));
app.use(express.json());

app.get('/', (req, res)=>{
    console.log("home page");
})

const val = {
    name: "sachin",
    age: 20,
}

app.get('/data', (req, res)=>{
    return res.json({val});
})

app.listen("8080", ()=>{
    console.log("server is running on port 8080");
})