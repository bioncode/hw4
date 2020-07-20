const express = require("express");
const app = express();

var faker = require('faker');
var phone = faker.phone.phoneNumber();
// console.log(phone);
var email = faker.internet.email();
// console.log(email);

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.ejs", {"phone":phone, "email":email});
});

app.get("/structure", function(req, res){
    res.render("structure.ejs", {"phone":phone, "email":email});
});

app.get("/sample", function(req, res){
    res.render("sample.ejs", {"phone":phone, "email":email});
});

app.get("/browsers", function(req, res){
    res.render("browsers.ejs", {"phone":phone, "email":email});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});