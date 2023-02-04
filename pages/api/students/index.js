import mongoose from "mongoose";
import Student from "@/models/studentModel"
import { dbConnect } from "@/config/db";

dbConnect()

export default async (req,res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const students = await Student.find({})

                res.status(200).json({ success: true, data:students})
            } catch (error) {
                res.status(400).json({success:false, message:error})
            }
            break;
        case 'POST':
            try {
                //const student = await Student.create(req.body)
                const students = await Student.insertMany(req.body)
                res.status(200).json({ success: true, data:students})
            } catch (error) {
                res.status(400).json({success:false, error})
            }
            break;
        case 'DELETE':
            try {
                const student = await Student.findByIdAndDelete(req.body.id)

                res.status(200).json({ success: true, data:student})

            } catch (error) {
                res.status(400).json({success:false, message:error})
            }
            break;
            
    }
}