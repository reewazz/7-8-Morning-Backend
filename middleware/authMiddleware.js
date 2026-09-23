import jwt from "jsonwebtoken"
import { secretKey } from "../controllers/userControllers.js"

export const verifyToken = async(req,res,next)=> {

    const header  = req.headers.authorization
    console.log(header)

    const token = header.split(" ")[1]
    const decoded = jwt.verify(token,secretKey)

    req.user = decoded

    console.log(decoded,"decoded")

    if(!decoded) {
        return res.status(403).json({
            message : "token invalid or expired"
        })
    }

    next()


}


export const isAdmin = (req, res, next) => {
  if (req.user?.role !== "ADMIN") {
    return res.status(403).json({
      message: "Access denied. Admin only."
    });
  }

  next();
};
