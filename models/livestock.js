// Define a Mongoose schema

import mongoose from "mongoose";
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
  });
  
  // Create a Mongoose model
  export default mongoose.model("Livestock", livestockSchema);
  