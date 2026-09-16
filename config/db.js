import mongoose from "mongoose";

export const connectDB = async()=> {
try{
   const res = await mongoose.connect(process.env.DB_URL);
    console.log("DB connected successfully......")
}catch(error) {
console.log("DB connection failed !!!!!!",error)
}
}