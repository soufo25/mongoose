const mongoose = require("mongoose");
const { createPeople } = require("./tools/CreatePeople");
const { findPeople } = require("./tools/FindPeople");
const { findOne } = require("./tools/FindOne");
const { findId } = require("./tools/FindId");
const { updateOne } = require("./tools/UpdateOne")
const { findAndRemove } = require("./tools/FindAndRemove")
const { addBuger } = require("./tools/AddBuger")
const {chainSearch} = require("./tools/Buritos")
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
require("dotenv").config();
const Port = 5000;

mongoose.connect(
  process.env.mongo,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to db")
);

// [
//   { firstName: "Frankie", age: 74, favoriteFood: ["Rice", "soup"] },
//   { firstName: "Sol", age: 76, favoriteFood: ["Bean", "Rice"] },
//   { firstName: "Robert", age: 78, favoriteFood: ["Chicken", "Meat"] },
// ]

app.post("/create", createPeople);
app.get("/find", findPeople);
app.get("/findone",findOne)
app.get("/findid", findId)
app.get("/updateone",updateOne)
app.get("/remove", findAndRemove )
app.get("/addbuger", addBuger)
app.get("/buritos", chainSearch)


app.listen(Port, () => {
  console.log("app is running on port " + Port);
});
