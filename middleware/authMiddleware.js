import jwt from "jsonwebtoken"
import { secretKey } from "../controllers/userControllers.js"

export const verifyToken = async(req,res,next)=> {

    const header  = req.headers.authorization
    console.log(header)

    const token = header.split(" ")[1]
    const isVerified = jwt.verify(token,secretKey)

    if(!isVerified) {
        return res.status(403).json({
            message : "token invalid or expired"
        })
    }

    next()


}