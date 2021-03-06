import joi from "joi";
import spanishJoi from "../utils/spanish-joi-messages";

export const userSchema = joi.object({
    firstName: joi.string().required().messages(spanishJoi),
    lastName: joi.string().required().messages(spanishJoi),
    email: joi.string().email().required().messages(spanishJoi),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages(spanishJoi)
});

export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next();
        }catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
    }
}