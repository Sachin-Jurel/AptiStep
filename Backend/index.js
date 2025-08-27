const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors);
app.use(express.json);

app.get('/', (req, res)=>{
    console.log("home page");
})

app.listen("8080", ()=>{
    console.log("server is running on port 8080");
})