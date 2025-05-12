import jwt from 'jsonwebtoken'
import Game from '../schema/game.js';
import User from '../schema/user.js';

import { COLORS } from '../enums/Colors.js';

export const doit = async (req, res) => {

    try {
        console.log(`The requset is :- ${JSON.stringify(req.body)}`);
        req.body.balance -= 100;

        return res.status(200).json(`100rs are deducted :- ${JSON.stringify(req.body)}`);
    } catch (error) {
        console.log("failed in doit :- controller/main.js " + error);
    }
    return res.status(501).json("Failed in doit");
}

export const login = async (req, res) => {

    try {
        if (req.body.password) {
            let reqBody = {
                'username': req.body.username,
                'id': 1
            };
            let token = jwt.sign(reqBody, 'jwt_123');
            return res.status(200).json({ 'message': `Logged in succesfully`, 'token': token });
        }
    } catch (error) {
        console.log("Failed in controller/login " + error);
    }
    return res.status(501).json({ error: "Failed to login " });
}

export const getToken = async (req, res) => {
    try {
        let token = jwt.sign(req.body, "jwt_123");
        return res.status(200).json({ 'isGenerated': true, 'token': token });
    } catch (error) {
        console.log("Failed to generate token. " + error);
    }
    next();
}


// Main Code :- Save Usres

export const saveUsers = async (req, res) => {
    try {

        if(!req.body) return res.status(401).json({isSuccess: 'false', message: "Failed to get reqBody :- "});
        console.log(JSON.stringify(req.body));

       const { totalUsers, users } = req.body;
        
        let game = new Game();
        game.id=game._id.toString();
        game.totalUsers=totalUsers;

        let usersToSave = [];
        for(let i=0;i<totalUsers;i++){
            let useri = new User();
            useri.id=users[i].userId;
            useri.username=users[i].userName;
            useri.age=10*i;
            useri.balance=5000*i;
            useri.color=users[i].color;
            useri.gameId=game._id;
            await useri.save();
            usersToSave.push(useri._id);
        }
        game.users=usersToSave;
        await game.save();

        return res.status(201).json({ isSuccess: 'true', message: "users saved successfully :- " });

    } catch (error) {
        return res.status(501).json({ isSuccess: 'false', message: "Failed to save user :- " + error });
    }
};