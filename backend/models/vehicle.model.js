import mongoose, {Schema} from "mongoose";

const vehicheSchema = new Schema({
    type : {
        type: String,
        required: true
    },
    fineImposed : {
        type: Number,
        min : 0,
        default: () => Math.random() < 0.5 ? 0 : 100,
    }
})

export const Vehicle = mongoose.model("Vehicle", vehicheSchema)