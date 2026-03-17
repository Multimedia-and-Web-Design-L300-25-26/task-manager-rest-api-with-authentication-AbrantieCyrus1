import mongoose from "mongoose";

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed", error.message || error);

    // In test environment, throw the error so Jest can report it
    if (process.env.NODE_ENV === "test") {
      throw error;
    }

    // In non-test environments, log the error but don't exit
    console.error("Continuing without database connection...");
  }
};

export default connectDB;