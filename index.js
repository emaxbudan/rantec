import express from "express";
import { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/userRoute.js";
import bookingRoute from "./routes/bookingRoute.js";
import livestockRoute from "./routes/livestockRoute.js";
import authRoute from "./routes/authRoute.js";
import vetRoute from "./routes/vetRoute.js"

config();
const app = express();
const port = process.env.PORT || 6789;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB database connected");
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB database connection failed:", error);
  });

app.use(json());
app.use(cors());
app.use("/userRoute", router);
app.use("/livestockRoute", livestockRoute);
app.use("/authRoute", authRoute);
app.use("/bookingRoute", bookingRoute);
app.use("/vetRoute", vetRoute);

app.get("/", (_req, res) => {
  res.send("API is responding");
});
