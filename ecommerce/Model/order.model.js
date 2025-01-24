import mongoose from "mongoose";


const orderIdSchema = new mongoose.Schema({
    productId :{
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"

    } ,
    quantity : {
        type : Number, required : true
    }
})

const orderSchema = new mongoose.Schema({
    orderprice : {type : Number , required : true,},
    customer : {type : mongoose.Schema.Types.ObjectId, ref : "User"

    },
    orderItems : {
        type : [orderIdSchema]

    },
    address : {
        type : String , required : true
    },
    status : {
        type : String ,
        enum : ["PENDING", "CANCELLED", "DELIEVERED"],
        default : "PENDING"
    }



}, {timestamps: true})





export const Order = mongoose.model("Order", orderSchema)