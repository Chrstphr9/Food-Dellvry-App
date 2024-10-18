import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://octan311:AIqzFwuQfz0z5YSl@cluster0.qes2c.mongodb.net/blog-app')
    console.log("DB Connected");
    
}