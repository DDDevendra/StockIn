import mongoose from "mongoose";
import User from "./user.js";

const game = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    totalUsers:{
        type:Number,
        default:0
    },
    users: {
        type:[{ type: mongoose.Schema.Types.ObjectId, ref: User }]
    }
});

const Game = mongoose.model("Game", game);

export default Game;
