import jwt from 'jsonwebtoken'

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
        if(req.body.password){
            let reqBody = {
                'username':req.body.username,
                'id':1
            };
            let token = jwt.sign(reqBody,'jwt_123');
            return res.status(200).json({'message':`Logged in succesfully`, 'token':token});
        } 
    } catch (error) {
        console.log("Failed in controller/login " + error);
    }
    return res.status(501).json({ error: "Failed to login " });
}

export const getToken = async(req, res) => {
        try{
            let token = jwt.sign(req.body,"jwt_123");
            return res.status(200).json({'isGenerated':true,'token':token});
        }catch(error){
            console.log("Failed to generate token. "+error);
        }
        next();
}