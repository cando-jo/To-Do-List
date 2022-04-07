const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //bound to exports of date.js
const app = express();



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//Everytime we use app.render we have to defind both variables!
const items = ["Buy Food","Cook Food","Hello Food"];
const workItems = [];

//localhost
app.get("/",function(req,res)
{
const day = date.getDate();

  res.render("list", {listTitle: day, newListItem: items}); //it will look into a folder called views, and look for list.ejs
});

app.post("/",function(req, res)
{

    const item = req.body.myInput;
    console.log(req.body);
  if(req.body.list === "Work List")
  {
    workItems.push(item);
    res.redirect("/work");
  }

  else
  {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res)
{
  res.render("list",{listTitle: "Work List",newListItem: workItems })
});

app.post("/work",function(req,res)
{

  const workItem = req.body.myInput;
  workItems.push(workItem);
  res.redirect("/work");
});

app.listen(3000,function(req,res)
{
  console.log("Listening on port 3000");
});

app.get("/about", function(req, res)
{
  res.render("about");
});



//We have to type res.send() after res.write, if we dont say res.send() the res.write()'s wont be sent
