import express from "express"
import { HomeCategory } from "../controllers/HomeCategory.js"

 const router =express.Router()
 router.get('/:category', HomeCategory);

 export default router