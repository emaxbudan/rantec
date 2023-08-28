// models/vetSpaceModel.js
import mongoose from "mongoose";

const vetSpaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
});

export default mongoose.model('VetSpace', vetSpaceSchema);




