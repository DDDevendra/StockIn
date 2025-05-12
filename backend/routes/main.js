import express from "express";
import * as mainController from "../controllers/main.js"
import { authenticate } from "../middlewares/auth.js";
import { signup } from "../controllers/entry.js";

let main = express.Router();

main.post('/first',mainController.doit);
main.post('/token',mainController.getToken);
main.post('/login',authenticate,mainController.login);
main.post('/signup',signup);

main.post('/saveUsers',mainController.saveUsers);
export default main;