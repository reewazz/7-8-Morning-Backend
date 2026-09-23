import User from "../model/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const secretKey = "apple"

export const getUsers = async(req,res)=>{
    const allBlogs = await User.find()
  res.json(allBlogs)
}

export const createUser = async(req,res)=>{

    const {email,password} = req.body

const existingEmail = await User.findOne({email})

if(existingEmail){
    return res.send("Email already exists")
}


    const hashedPassword = await bcrypt.hash(password,10)

  const createdBlog = await User.create({
            ...req.body,
        password : hashedPassword,
    })
  res.json(createdBlog)
}

export const login = async(req,res)=> {

    // const {email,password} = req.body
    // const user = await User.findOne({email})

    //upper code is shorcut method

    const emailFromBody = req.body.email
    const passwordFromBody = req.body.password

    const user = await User.findOne({email:emailFromBody})

    if (!user) {
        return res.send ("user with this email not found")
    }
   
    const isMatch = await bcrypt.compare(passwordFromBody,user.password)

    if(!isMatch) {
        return res.send("Email or password incorrect")
    }

        const token = jwt.sign({
            id : user._id,
            email : user.email,
            fullName : user.fullName,
            role : user.role
        },secretKey,{expiresIn: "1h"})

    res.json({
        message : "Logged in successfully",
        token,          
         id : user._id,
            email : user.email,
            fullName : user.fullName,
            role : user.role
    })


}


export const getUserById = async(req,res)=>{
    const allBlogs = await User.findById(req.params.id)
  res.json(allBlogs)
}

export const deleteUser = async(req,res)=>{
    const allBlogs = await User.findByIdAndDelete(req.params.id)
  res.json({
    message :"User deleted successfully"
  })
}

export const updateUser = async(req,res)=>{
    const allBlogs = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(allBlogs)
}