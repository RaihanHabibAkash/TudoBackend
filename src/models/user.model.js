import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: false,
        unique: true
    },
    tudos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tudo",
        required: false
    },
    subTudos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTudo",
        required: false
    }

    
} , { timestamps: true });

export const User = ("User", userSchema);