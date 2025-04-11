const mongoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const item=mongoose.model('task',itemSchema)

module.exports=item