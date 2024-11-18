import mongoose from "mongoose"

const userSchema = new mongoose.schema({
    cartData:{type:Object, default:{}}
},{minimize:false})

const userModel = mongoose.model.user || mongoose.modek("user", userSchema)

export default userModel;