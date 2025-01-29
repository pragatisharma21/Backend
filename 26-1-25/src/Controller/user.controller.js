import User from "../Model/user.model.js";


const registerUser =  async(req, res)=>{
    const {name , email,password} = req.body
    if(!name || !email || !password){
       return res.status(400).json({message: " all field are required"})
    }
    try {
        const existingUser = User.findOne({email})
            if(existingUser){
               return res.status(400).json({message: "user is already exist"})
            }
            const user = await User.create({name , email, password})
            res.status(201).json({message: "user created successfully"})
            user : 
                {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
    });
 } catch (error) {
            res.status(500).json({ message: 'Server Error!', error: error.message });
        }
    };
    
    module.exports = { registerUser };
         
        
   
        
 