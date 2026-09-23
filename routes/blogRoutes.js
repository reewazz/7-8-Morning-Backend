import express from "express"
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from "../controllers/blogControllers.js"
import { isAdmin, verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/create",createBlog)

router.get("/getAll",verifyToken,isAdmin, getBlogs)

router.get("/getById/:id",getBlogById)

router.delete("/delete/:id",deleteBlog)

router.put("/update/:id",updateBlog)


export default router