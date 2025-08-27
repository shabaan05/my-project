import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGODB IS CONNECTED");
    } catch (error) {
        console.log("MONGODB IS NOT CONNECTE",error)
    }
}
export default connectDB;