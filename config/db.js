import { connect } from "mongoose";


export const connectDB = async (connectionString) => {
  try {
    const Connect = await connect(connectionString);
    if (process.env.NODE_ENV !== "production")
      return console.log(`Dev DB connected @ ${Connect.connection.host}`);
    console.log(`Production DB connected @ ${Connect.connection.host}`);
  } catch (error) {
    console.log(`DB connection failed ${error}`);
    process.exit(1);
  }
};
