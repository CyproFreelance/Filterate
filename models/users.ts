import mongoose from "mongoose";
import { models } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    // username and password    

    name: {
        type: String,
        required : true
    },
    username: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true

    },
    password: {
        type: String,
        required : true
    },
}, {timestamps: true})

const Users = models.Users || mongoose.model('Users', userSchema );
export default Users