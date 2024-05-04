import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Declare schema
const TodoSchema = new Schema({
  //Title type is string , default value is assigned if user not put title while creating or inserting model
  title: {type:String , required: true , default: "Hey this is title"},
  desc: String,
  isDone: Boolean,
  Age: Number,
});

//Declare and export model
export const Todo = mongoose.model("Todo", TodoSchema);
