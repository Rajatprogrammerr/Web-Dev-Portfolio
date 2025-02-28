
import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        message: {
            type: String
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
)

const Form = mongoose.model("Form", formSchema);
export default Form