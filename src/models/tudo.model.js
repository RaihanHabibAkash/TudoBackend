import mongoose from "mongoose";

const tudoSchema = new mongoose.Schema({
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
    subTudos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTudo",
        required: false
    }],

}, { timestamps: true });

export const Tudo = mongoose.model("Tudo", tudoSchema);