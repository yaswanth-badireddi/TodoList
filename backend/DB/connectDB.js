import mongoose from 'mongoose';

export const connectDB=async()=>{
    try{
        const con=await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("mongo connected");
    }catch(error){
        console.error("error connecting to mongo", error);
        console.log("plese check the mongo");
        process.exit(1);
    }
}