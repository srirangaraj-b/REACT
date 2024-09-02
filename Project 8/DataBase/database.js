import mongoose from "mongoose";

 
const connectDB = async (MONGO_DB) => {
    try{
        await mongoose.connect(MONGO_DB)
        console.log("mongodb")
    }catch(err){
        console.log(err)
    }
}
export default connectDB