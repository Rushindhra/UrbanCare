import express from "express"
import { PetControll } from "../controllers/PetController.js"
const router =express.Router()
router.get("/:specialist",PetControll)

export default router

