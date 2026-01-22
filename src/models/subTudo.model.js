import mongoose from "mongoose";

const subTudoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tudo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tudo",
        required: true
    }
}, { timestamps: true });

export const SubTudo = mongoose.model("SubTudo", subTudoSchema);