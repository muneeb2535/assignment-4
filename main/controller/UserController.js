
const User = require('../model/UserModel')

exports.addUser =  async (req,res) => {

    const {name, email, password} = req.body
    const data = new User({
       name,
       email,
       password
    })

    try{
        const dataSave = await data.save();
        res.status(200).send(dataSave);       
    }
    catch(error){
        res.status(400).send({message: error.message})
    }
}



exports.getAllUser =  async (req,res) => {

    try
    {
        const data = await User.find();
        res.status(200).send(data)
    }
    catch(error){
        res.status(400).send({message: error.message})
    }
}


exports.updateUser = async (req,res) => {

    try {

        const id = req.params.id
        const updateData = req.body
        const options = {new : true}

        const result = await User.findByIdAndUpdate(id,updateData,options)

        res.status(200).send(result)

    }
    catch(error){
        res.status(400).send({message: error.message})
    }

}

exports.getOneUser = async (req, res) => {
	try {
		const data = await User.findById(req.params.id);
		if (!data) {
			return res.send('User not found!');
		}
		res.send(data);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
}

exports.deleteOne = async (req, res) => {
	try {
		const id = req.params.id;
		const data = await User.findByIdAndDelete(id);
		res.send(` ${data.name} has been deleted..`);
	} catch (error) {
		res.status(400).send({ message: error.message });
	}
}