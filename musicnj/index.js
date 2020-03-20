
var express = require("express");

var app = express();

var fs = require('fs');

const PORT = process.env.PORT || 5000;
app.listen(PORT,function () {
    console.log("Server is running..");
});

app.use(express.static('public'));

app.set("view engine","ejs");

app.get("/",function (req,res) {
    var chart_text = fs.readFileSync("data/charts.json");
    var charts = JSON.parse(chart_text);
    res.render('home_page',{
        charts : charts,
    });
});

app.get("/premium",function (req,res) {
    res.render("premium");
});

app.get("/help",function (req,res) {
    res.render("trogiup");
});

app.get("/download",function (req,res) {
    res.render("taixuong");
});

app.get("/signup",function (req,res) {
    res.render("dangky");
});

app.get("/login",function (req,res) {
    res.render("dangnhap");
});





