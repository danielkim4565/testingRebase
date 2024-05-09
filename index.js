require('dotenv').config();
const express = require("express");

const app = express();
app.set("view engine", "ejs");

console.log("hello")

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(3000, function() {
    console.log("Server is up")
    console.log(process.env.CLIENT_ID)
});