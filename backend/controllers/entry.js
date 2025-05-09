import user from '../schema/user.js'

export const signup = async (req, res) => {

    try {
        if (req.body) {
            let reqBody = req.body;
            console.log(JSON.stringify(req.body));
            if (!reqBody.username) return res.status(402).json("Please Enter Valid Username");
            if (!reqBody.password) return res.status(402).json("Please Enter Valid Password");

            // verify password
            let newUser = new user(req.body);
            try {
                await newUser.save(newUser)
            } catch (error) {
                return res.status(401).json("Failed to Save User " + error);
            }
            return res.status(201).json({ message: "User Saved Successfully", success: true })
        }
        return res.status(402).json({ message: `Failed to SignUp`, success: false })
    } catch (error) {
        return res.status(402).json({ message: `Failed to SignUp ${error}`, success: false })
    }
}