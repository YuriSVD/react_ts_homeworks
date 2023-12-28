import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.number().min(1).max(100).required(),
    name: Joi.string().regex(/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/).required().messages({
        "string.pattern.base": "Brand contains from only letters, min 1 symbol, max 20 symbols"
    }),
    email: Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).required().messages({
        "string.pattern.base": "Example: john.smith@gmail.com"
    }),
    body: Joi.string().required(),
});

export {commentValidator}