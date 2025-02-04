import User from "../Models/user.model.js"
import bcrypt from "bcryptjs"

export const signup = async(req,res)=>{
    try {
        const {name , email, password} = req.body
        const isAvailable = await User.findOne({email})
        if(isAvailable){
        return res.status(400).json({message: "user is already exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({name, email, password:hashedPassword})
        await newUser.save()
        res.status(201).json({message: "user is created Successfully", newUser})
        
    } catch (error) {
        res.status(500).json({message: error})
        
    }

}