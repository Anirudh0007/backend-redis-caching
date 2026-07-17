import mongoose from "mongoose";

const connectMongo=async()=>{
    await mongoose.connect(process.env.MONGOURI);

    console.log("MongoDB connected");
    
}

export default connectMongo;