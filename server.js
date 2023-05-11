
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("NAME: Gaganjot Singh <BR> STUDENT ID: 174905216 <BR> Hi, my name is Gaganjot Singh and I'm currently studying CPA (Computer Programming and Analysis) at Seneca College. I've always been fascinated by technology and computer programming, so choosing this course of study was a natural choice for me. Aside from my academic pursuits, I enjoy playing Video Games.");
});
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);