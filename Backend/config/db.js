import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://somto565:test1234@cluster21.p6skm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster21')
    console.log("DB Connected");
    
}