//mongodb schema

const mongoose=require('mongoose')

const DoctSchema= new mongoose.Schema({
    doctor:String,
    availability:{
        type:Boolean,
        default:false
    },
    phone:Number,
    adress:String,
    image:String,
})

const DocsModel=mongoose.model("doctor_data",DoctSchema)//name of the db and schema
module.exports=DocsModel

