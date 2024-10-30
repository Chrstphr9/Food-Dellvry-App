import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item

const addFood = async (req, res) => {
    // Use req.file for image and req.body for form data
    const { name, description, category } = req.body;
    const price = Number(req.body.price); // Convert price to a number
    const image_filename = req.file?.filename || ''; // Handle missing file
  
    const food = new foodModel({
      name,
      description,
      price, // Ensure price is a number
      category,
      image: image_filename
    });
  
    try {
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    } catch (error) {
        res.json({success:false,message:"Error"})
    }
}









export {addFood, listFood}