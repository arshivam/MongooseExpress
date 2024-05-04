import express from "express";
import mongoose from "mongoose";
//Importing todo from models folder
import { Todo } from "./models/Todo.js";

const app = express();
const port = 3000;

//connection with help of mongoose
let connection = await mongoose.connect("mongodb://localhost:27017/todo");

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "first todo", //If title is not set then default hey this is title value will be assigned automatically
    desc: "first description",
    isDone: false,
    Age: Math.floor(Math.random() * 100),
  });
  //To instert data or schema into db
  todo.save();
  res.send("Hello World!");
});

app.get("/findone", async (req, res) => {
  // find one method
  let a = await Todo.findOne({});
  console.log("findone :", a);

  //returing response as json
  res.json({ title: a.title, desc: a.desc, isDone: a.isDone, Age: a.Age });
  //res.json(a)
});

app.get("/findmany", async (req, res) => {
  // find Many method
  let result = await Todo.find({});
  console.log("findMany :", result);
  //returing response as json
  res.json(result);
});

app.get("/delete", async (req, res) => {
  // delete Many method
  let result = await Todo.deleteMany({});
  console.log("delete :", result);
  res.send("Hello Delete");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
