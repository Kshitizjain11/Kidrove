import mongoose from "mongoose";

export const DatabaseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
};
