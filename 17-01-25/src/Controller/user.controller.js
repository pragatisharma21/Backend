import { logger } from "../Middleware/logger.js";
import User from "../Model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

 export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isAvailable = await User.findOne({ email });
    if (isAvailable) {
      return res.status(400).json({ message: "user is already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "user created successfully", newUser });
  } catch (error) {
    logger.error(`Error making user ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
  

export const login = async(req, res)=>{
    try {
        const { email, password} = req.body
        const isAvailable = await User.findOne({email})
        if(!isAvailable){
            return res.status(404).json({message: "user is not found"})

        }
        const isValidPassword = await bcrypt.compare(password, isAvailable.password)
        if(!isValidPassword){
            res.status(400).json({message: "incorrect credentials"})
        }

        const token = jwt.sign({
            id: isAvailable._id,
            username: isAvailable.name,
            email: isAvailable.email
        }, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.status(200).json({token})

    } catch (error) {
         logger.error(`Error making user ${error.message}`);
         res.status(500).json({ message: "Internal Server Error" });
    }
}

// isAvailable = {
//     name:"Shiv",
//     email:"Shiv@gmail.com",
//     password:"213294b28wci#$BU*#@#Vb78",
//     age:23,
//     gender: "Male"
// }

// isAvailable = null
