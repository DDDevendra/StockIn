import jwt from 'jsonwebtoken'

export const authenticate = async (req, res, next) => {

    const token = req.header('Authorization');
    if (!token) return res.status(402).json({ message: 'Access Denied' });
    let decode = jwt.verify(token, "jwt_123", (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid Token '+err});
    });
    next();
}