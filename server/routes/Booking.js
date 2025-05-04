import express from "express"
import {BookingControll} from "../controllers/BookingControll.js"

const router =express.Router()
router.get("/:id",BookingControll)
export default router