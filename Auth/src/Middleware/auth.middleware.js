import jwt from "jsonwebtoken"


const authMiddleware = (req,res,next)=>{
    const tokenData = req.header('Authorization')
    const token = tokenData.replace('Bearer', '').trim()
    if(!token) res.status(401).json({message:"Acess denied"})


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        next(error)
    }    


}

export default authMiddleware;