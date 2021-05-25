import jwt from "jsonwebtoken";


export const generateJWT = (user) => {
    const userObj = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }
    const token = jwt.sign(userObj, process.env.SECRET_KEY, { algorithm: "HS384", expiresIn: "1hr"});
    return token;
}

export const validateJWT = (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    const token = bearerToken.split(" ")[1];
    if(token){
        try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch(error) {
        res.status(401).json({
            message: "El token es invalido"
        });
        console.log(error)
    }
}
}