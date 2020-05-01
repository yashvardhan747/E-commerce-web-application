require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var authRoutes = require("./routes/auth");
// DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true})
    .then(()=>{
        console.log("DB CONNECTED");
    });

const port = process.env.PORT || 8000;

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api", authRoutes)

//Listening
app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
});
