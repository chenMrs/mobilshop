import mongoose from 'mongoose'
const reviewSchema = mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    comment:{type:String,required:true},
    },
    {
        timeStamps :true,
    }
)
const productSchema = mongoose.Schema({
    user :{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'User'
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    brand:{
        type:String,
        require:true,
    },
    catagory:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
        default:0,
    },
    description:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        require:true,
    },
    reviews:[reviewSchema],
    numReviews:{
        type:Number,
        require:true,
    },
    countInStock:{
        type:Number,
        require:true,
        default:0,
    },
},{
    timeStamps:true,
})
const Product =mongoose.model('Product',productSchema)
export default Product