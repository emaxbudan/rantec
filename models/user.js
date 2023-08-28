import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },

    // photo: {
    //   type: String,
    // },
    // location: {
    //   type: String,
    // },
    // date: {
    //   type: Date,
    // },
    // role: {
      type: String,
      enum: ["Admin", "farmer", "doctor"],
    },
  
  { timestamps: true }
)


export default mongoose.model("users", userSchema);

