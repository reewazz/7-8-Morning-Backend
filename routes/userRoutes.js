import express from "express"
import { createUser, deleteUser, getUserById, getUsers, login, updateUser } from "../controllers/userControllers.js"

const router = express.Router()

router.post("/create",createUser)

router.post("/login",login)

router.get("/getAll",getUsers)

router.get("/getById/:id",getUserById)

router.delete("/delete/:id",deleteUser)

router.put("/update/:id",updateUser)


export default router