import User from "../Models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const signUp = async(req,res)=>{
    try {
        const {name, email, password} = req.body
        const isAvailable = await User.findOne({email})
        if(isAvailable){
            return res.status(400).json({message: "user is already exist"})
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        const newUser = new User({name, email, password:hashedpassword})
        await newUser.save()
        res.status(201).json({message:"user is created successfully", newUser})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        
    }

}


export const login = async(req,res)=>{
    try {
        const {email, password} = req.body
        const isAvailable = await User.findOne({email})
        if(!isAvailable){
            return res.status(404).json({message:"user is not exist"})
        }
        const isvalidPassword = await bcrypt.compare(password, isAvailable.password)
        if(!isvalidPassword){
           return res.status(200).json({message:"Incorrect credentials"})
        }
        const token = jwt.sign({
            id : isAvailable._id,
            username : isAvailable.name,
            email : isAvailable.email
        }, process.env.JWT_SECRET, {expiresIn : "1h"})
        
        res.status(200).json({token})

        
    } catch (error) {
        res.status(500).json({message:"Internal Server error"})
        
    }

}

