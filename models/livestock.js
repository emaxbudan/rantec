// Define a Mongoose schema

import mongoose from "mongoose";
import {nanoid} from "nanoid"
// const uniqueId = nanoid()

const livestockSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true },
    breed: { 
        type: String, 
        required: true },
    age: { 
        type: Number, 
        required: true },
    weight: {
         type: Number, 
         required: true },
         uniqueId: {
            type: String,
            required: true,
            default: () => nanoid(),
            index: { unique: true },
          },
  });
  
  // Create a Mongoose model
  export default mongoose.model("Livestock", livestockSchema);
  