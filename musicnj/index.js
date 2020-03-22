
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
    var homeMusicList_text = fs.readFileSync("data/homeMusicList.json");
    var homeMusicList = JSON.parse(homeMusicList_text);
    res.render('home_page',{
        homeMusicList : homeMusicList,
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
app.get("/artist/:musicId",function (req,res){
    //de lay gia tri tham so
    var musicId = req.params.musicId;
    var homeMusicList_text = fs.readFileSync("data/homeMusicList.json");
    var homeMusicList = JSON.parse(homeMusicList_text);
    var artist = null;
    for (var i=0; i<homeMusicList.length;i++){
        if(homeMusicList[i].musicId == musicId) {
            artist = homeMusicList[i];
            res.render("artist", {artist: artist});
            return;
        }
    }
    res.send("Không tìm thấy liên lạc!");
});
app.get("/support",function (req,res) {
    res.render("support");
});



