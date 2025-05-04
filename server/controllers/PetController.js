import { PetCaremodel } from "../models/PetModel.js"
export const PetControll=async(req,res)=>{
    const {specialist}=req.params
    console.log("Searching for specialist",specialist)
    try{
        const data=await PetCaremodel.find({specialist:specialist})
        console.log("Raw DB response:",data)
        if (data.length === 0) {
            return res.status(200).json({ 
              message: "No providers found for this category.",
              specialist: specialist // Helps verify the correct category was searched
            });
          }
          const response = data.map(result => ({
            name:result.name,
            age:result.age,
            gender:result.gender,
            experienceInYears:result.experienceInYears,
            specialist: result.specialist,
            petTypesHandled:result.petTypesHandled,
            rating: result.rating,
            price: result.chargesPerHour || result.chargesPerlour,
            availableTimings: result.availableTimings,
            location: result.location
          }));
          res.status(201).json(response);

    }catch(err){
        res.status(500).json({ 
            message: 'Failed to fetch providers',
            error: err.message 
          });
    }
}