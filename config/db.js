import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}