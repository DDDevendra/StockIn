import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Corrected 'require' to 'required'
    },
    age: {
        type: Number,
    },
    balance: {
        type: Number,
    },
    password: {
        type: String,
    },
});

const User = mongoose.model("User", UserSchema);

export default User;
