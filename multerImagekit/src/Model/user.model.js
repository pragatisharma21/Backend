import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type : String, required: true
    },
    avatar: {
        type: String
    }
},
{timestamps: true}
);

export const User = mongoose.model("User", userSchema);