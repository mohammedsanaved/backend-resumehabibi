import mongoose from "mongoose";
export const connectDB = async () => {
  const URL = process.env.MONGO_URI;
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`db connected `);
  } catch (error) {
    console.log(error);
  }
};
