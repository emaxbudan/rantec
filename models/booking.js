// models/bookingModel.js

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  livestockId: {
     type: String,
      ref: 'Livestock', 
      required: true },
  vetSpaceId: { 
    type: String, 
    ref: 'VetSpace', 
    required: true },
  date: {
     type: Date,
      required: true },
  time: {
     type: String,
      required: true },
});

export default mongoose.model('Booking', bookingSchema);



