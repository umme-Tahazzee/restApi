const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const users = require("./models/user.model");
const router = require("./routes/users.routes");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/users",router)



// home route
app.get("/", (req,res)=>{
      res.sendFile(__dirname + "/views/index.html")
})

//router error
app.use((req,res,next)=>{
      res.send(`404 not found`);
      next()
})
//server error
app.use((err,req,res,next)=>{
    res.status(500).json({msg : `404 not found`});
    next()
})
module.exports = app;