const express = require("express")
const app = express();
const cors = require("cors")

const mongoose= require("mongoose")
const routers = require("../main/router/UserRoutes")
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())


app.use("/",routers)
require("dotenv").config();

// require('../main/dbconnection/Connection')();
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/user-api")
.then(() =>{
    app.listen(5000, ()=>{
        console.log("Server Started......")
    })
}).catch((error) =>{
    console.log(error)
})



// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
// 	console.log(`Server is running at port ${PORT}`);
// });