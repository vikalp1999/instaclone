const mongoose= require("mongoose");

const connect= async()=>{
    mongoose.set("strictQuery",false)
    mongoose.connect(process.env.MONGODB_URL)
}

module.exports= connect;