import mongoose from "mongoose";
import Game from "./game.js";

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
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
    color: {
        type: String,
    },
    gameId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    }
});

const User = mongoose.model("User", UserSchema);

export default User;
