import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";
export const connectDB=async()=>{
    try {
       const conn= await mongoose.connect(ENV_VARS.MONGO_URL)
       console.log("MongoDB connected"+ conn.connection.host)
    }catch(error){
        console.error("Error connecting to Mongodb"+error.message)
        process.exit(1)///1 means there was a error, 0 means success
    }
}
