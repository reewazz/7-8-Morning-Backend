import express from "express"
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from "../controllers/blogControllers.js"
import { verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/create",createBlog)

router.get("/getAll",verifyToken,getBlogs)

router.get("/getById/:id",getBlogById)

router.delete("/delete/:id",deleteBlog)

router.put("/update/:id",updateBlog)


export default router