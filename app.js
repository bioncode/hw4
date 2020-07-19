const express = require("express");
const app = express();

var faker = require('faker');
var phone = faker.phone.phoneNumber();
console.log(phone);
var email = faker.internet.email();
console.log(email);

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.ejs", {"phone":phone, "email":email});
});

app.get("/structure", function(req, res){
    res.render("structure.html");
});

app.get("/sample", function(req, res){
    res.render("sample.html");
});

app.get("/browsers", function(req, res){
    res.render("browsers.html");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});