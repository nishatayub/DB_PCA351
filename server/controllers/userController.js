const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

const addUser = async (req,res) => {
   try{
    const { username,  mail, password } = req.body;
    
    const existingUser = User.findOne({ mail });
    if(existingUser){
        res.status(400).json({ message: "User already exists" });
    };

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
        username,
        mail,
        password: hashedPassword
    });
    await newUser.save();
    res.status(201).json({ 
        message: "User created successfully", 
        user: { username: newUser.username, mail: newUser.mail }
    });
   }catch(err){
    res.status(500).json({ message: "Internal Server Error", error: error.message });
   }
}

module.exports = { addUser };