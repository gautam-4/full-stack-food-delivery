import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
        throw new Error("MONGO_URI is not defined");
    }
    
    try {
        await mongoose.connect(mongoURI);
        console.log("DB Connected");
    } catch (err) {
        console.error("DB Connection Error:", err.message);
        process.exit(1);
    }
};