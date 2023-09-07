// models/vetSpaceModel.js
import mongoose from "mongoose";
import {nanoid} from "nanoid";

const vetSpaceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  location: {
     type: String,
     },
  capacity: { 
    type: Number,
     },
  specialization: {
     type: String,
      required: true
    },
  vetId: {
    type: String,
    required: true,
    default: () => nanoid(7),
    index: { unique: true },
 },
 bio: {
  type: String,
 },
});

export default mongoose.model('VetSpace', vetSpaceSchema);




