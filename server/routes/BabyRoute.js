import express from "express"
import {BabyControll} from "../controllers/BabyControll.js"
const router =express.Router()
router.get("/:specialist",BabyControll)

export default router