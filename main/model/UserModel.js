const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required:true,
        type : String,
    },
    password : {
        required:true,
        type : String,
    }
},{timestamps : true})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 11)
    next()
})
userSchema.pre("findOneAndUpdate", async function (next) {
    if (this._update.password)
        this._update.password = await bcrypt.hash(this._update.password, 11)
    next()
})
module.exports = mongoose.model("User",userSchema)