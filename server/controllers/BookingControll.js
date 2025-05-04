import { Homemodel } from "../models/Home.js";
export const BookingControll =async(req,res)=>{
    const {id}=req.params
    try{
        const provider=await Homemodel.findById(id)
        if(!provider){
            return res.status(404).json({success:false,message:"Provider not found"})
        }
        else{
            const response = {
                name: provider.name,
                specialist: provider.specialist,
                rating: provider.rating,
                price: provider.chargesPerHour || provider.chargesPerlour,
                availableTimings: provider.availableTimings,
                location: provider.location
              };
              res.status(200).json(response);

        }
       


    }catch(err){
        res.status(500).json({ 
            message: 'Failed to fetch providers',
            error: err.message })

    }

}