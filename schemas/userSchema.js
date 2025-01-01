import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type:Number,
    require: true,
  },
  number: {
    type: Number,
    require: false,
  },
  age: {
    type: Number,
  },
});

const modelling = mongoose.model("Users", userSchema);

export default modelling;
