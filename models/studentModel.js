import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required:true,
        maxLength:20
    },
    mobile : {
        type:String,
        required:true,
        maxLength:20
    },
    email : {
        type:String,
        required:true,
        maxLength:20
    },
    department : {
        type:String,
        required:true
    },
    address : {
        type:String,
        required:true,
        maxLength:20
    },
    image : {
        type:String,
        required:true,
        maxLength:200

    },
},{timestamps:true})

mongoose.models = {}

const Student = mongoose.model('Student', studentSchema)

export default Student;