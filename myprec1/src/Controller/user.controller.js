import userTable from "../Model/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt"

 export const signUUp = async(req, res)=>{
    try {
        const {name , email, password} = req.body
        const isAvailable = await userTable.findOne({email})
        if(isAvailable){
            return res.status(400).json({message: "user is already exist"})

        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new userTable({name , email , password : hashedPassword})
        await newUser.save()
        res.status(201).json({message: "user created Successfully", newUser})
           
    } catch (error) {
        res.status(500).json({message: "internal server error"})
        
    }

}