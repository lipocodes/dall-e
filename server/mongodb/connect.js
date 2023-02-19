import mongoose from 'mongoose';

const connectDB = async(url)=>{
 mongoose.set('strictQuery',true);
 mongoose.connect(url).then(()=>{
    console.log("MongoDB connected")
 }).catch((err)=>{console.log("Error has occured: " + err)});
}

export default connectDB;