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
 export const loginn = async(req, res)=>{
    try {
        const {email , password} = req.body
        const isAvailable =  await userTable.findOne({email})
        if(!isAvailable){
            return res.status(404).json({message: "user is not exist"})
        }
        const isValidPassword = await bcrypt.compare(password , isAvailable.password)
        if(!isValidPassword){
            res.status(400).json({message: "incorrect credentials"})
        }

        const token = jwt.sign({
            id : isAvailable._id,
            username : isAvailable.name,
            email : isAvailable.email
        }, process.env.JWT_SECRET() , {expiresIn : "1h"})
        res.status(200).json({token})

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
        
    }
}