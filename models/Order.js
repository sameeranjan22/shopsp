import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true,
        },
        email: {
            type: String, 
            required: true,
        },
        phone: {
            type: Number, 
            required: true,
        },
        address: {
            type: String, 
            required: true
        },
        pincode: {
            type: Number, 
            required: true
        },
        city: {
            type: String, 
            required: true
        },
        state: {
            type: String, 
            required: true
        },
        productName: [String],
        productQuantity: [Number],
        amount: {
            type: Number, 
            required: true
        },
    },
    {
         timestamps: true
    }
);
export default mongoose.models.lists || mongoose.model("lists", OrderSchema);
