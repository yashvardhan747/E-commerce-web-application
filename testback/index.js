const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
    return res.send("Home page");
})

const admin = (req, res) => {
    return res.send("admin dashboard");
}

const isadmin = (req, res, next) => {
    console.log("isadmin is runing")
    next()
}

const islogin = (req, res, next) => {
    console.log("islogin is runing")
    next()
}
app.use(isadmin)
app.use(islogin)
app.get("/admin", admin)

app.get("/Signout", (req, res) => {
    return res.send("You are signed out")
})

app.get("/Hitesh", (req, res) => {
    return res.send("Hitesh uses instagram")
})

app.get("/login", (req, res) => {
    return res.send("You are visiting login route");
})

app.get("/Signin", (req, res) => {
    return res.send("You are visiting signin route");
})

app.listen(port, () => {
    console.log("Server is up and running...");
})