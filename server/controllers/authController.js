import express from "express"
import bcrypt from "bcryptjs"
import {User} from "../models/Usermodel.js"
import { generateTokenAndSetCookie } from "../utils/generateToken.js"

export async function signup(req,res){
    try{
        const {email,password,username}=req.body
        if(!email || !password || !username){
            return res.status(400).json({success:false,message:"All fields are required"})
        }
        const emailRegix=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegix.test(email)){
            return res.status(400).json({success:false,message:"invalid email"})
        }
        if(password.length>6){
            return res.status(400).json({success:false,message:"password must be atleast 6 characters"})
        }

        const existingUserByEmail=await User.findOne({email:email})
        if(existingUserByEmail){
            return res.status(400).json({success:false,message:"Email already exist"})
        }
        const existingUserByUsername =await User.findOne({username:username})
        if(existingUserByUsername){
            return res.status(400).json({success:false,message:"Username already exist"})
        }

        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(password,salt)

        const newUser=new User({
            email:email,
            password:hashedpassword,
            username:username
        })
        await newUser.save()
        res.status(201).json({
            success:true,user:{
                ...newUser._doc,
                password:""
            }})

    }catch(error){
        console.log("Error in signup controller",error.message)
        res.status(500).json({success:false,message:"Internal server error"})
    }
}

export async function login(req,res){
 try{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({success:false,message:"All fields are required"})
    }
    const user=await User.findOne({email:email})
    if(!user){
        return res.status(400).json({success:false,message:"Invalid credentials"})
    }
    const isPasswordCorrect=await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.status(400).json({success:false,message:"Invalid credentials"})
    }
    generateTokenAndSetCookie(user._id,res)
    res.status(200).json({
        success:true,
        user:{
            ...user._doc,
            password:""
        }
    })

 }catch(error){
    console.log("Error in login controller",error.message)
    res.status(500).json({success:false,message:"Internal server error"})
 }
}
export async function logout(req,res){
    try{
       res.clearCookie("jwt-urbanclap")
       res.status(200).json({success:true,message:"Logged out successfully"})
    }catch(error){
        console.log("Error in logout controller",error.message)
        res.status(500).json({success:false,message:"Internal server error"})

    }
}