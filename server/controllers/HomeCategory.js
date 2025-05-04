// import {Homemodel} from "../models/"
import { Homemodel } from "../models/Home.js";
export const HomeCategory = async (req, res) => {
    const { category } = req.params;
    console.log("Searching for category:", category); // Debugging
  
    try {
      const providers = await Homemodel.find({ category: category });
      console.log("Raw DB response:", providers); // Check what MongoDB returns
  
      if (providers.length === 0) {
        return res.status(200).json({ 
          message: "No providers found for this category.",
          category: category // Helps verify the correct category was searched
        });
      }
  
      const response = providers.map(provider => ({
        name: provider.name,
        specialist: provider.specialist,
        rating: provider.rating,
        price: provider.chargesPerHour || provider.chargesPerlour,
        availableTimings: provider.availableTimings,
        location: provider.location
      }));
    // const response=new Homemodel({
    //     name:name,
    //     specialist:specialist,
    //     rating:rating,
    //     price:chargesPerHour || chargesPerlour,
    //     availableTimings:availableTimings,
    //     location:location
    // })
    // await response.save()
    
  
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json({ 
        message: 'Failed to fetch providers',
        error: err.message 
      });
    }
  };