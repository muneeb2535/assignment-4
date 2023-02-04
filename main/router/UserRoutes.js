const express = require("express");
const { addUser, getAllUser, updateUser, getOneUser, deleteOne } = require("../controller/UserController");

const router = express.Router();



const User = require('../model/UserModel')

router.post("/send" , addUser)
router.get('/get-all', getAllUser)
router.patch('/update-data/:id', updateUser)
router.get('/getOne/:id', getOneUser );
router.delete('/delete/:id', deleteOne );


module.exports = router