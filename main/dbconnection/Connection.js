const mongoose= require("mongoose")

module.exports = () =>{


    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb://127.0.0.1:27017/user-api");


    const database = mongoose.connection

    database.on("error", (error) =>{
        console.log(error)
    })


    database.once("connected", () =>{
        console.log("Database connected")
    })

}