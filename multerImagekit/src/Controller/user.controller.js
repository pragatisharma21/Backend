import { User } from "../Model/user.model.js";
import bcrypt from "bcryptjs";
import uploadToIMagekit from "../Utils/uploadImagekit.js";

export const SignupUser = async(req, res)=>{
    try {
        const {name, email, password} = req.body;

        // local file system setup check 
        // const avatar = req.file ? req.file.path : null;

        const isExistingUser = await User.findOne({email});

        if(isExistingUser){
            res.status(400).json({message: "User already Registered"});
        }

        const hashedPass = await bcrypt.hash(password, 10);

        let fileUrl = null;

        if(req.file){
            fileUrl = await uploadToIMagekit(req.file);
        }

        const newUser = new User({name, email, password: hashedPass, avatar: fileUrl ? fileUrl : avatar});
        newUser.save();
        res.status(201).json({message: "User created successfully"});
    } catch (error) {
        res.status(500).json({message: "Server Error", error })
    }
}