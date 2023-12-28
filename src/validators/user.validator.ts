import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[A-Z][a-z]+\s[a-zA-Z\s]+/).required().messages({
        "string.pattern.base": "Enter your name and surname with upper case"
    }),
    username: Joi.string().required(),
    email: Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).required().messages({
        "string.pattern.base": "Example: john.smith@gmail.com"
    }),
    address: Joi.object({
        street: Joi.string().regex(/^(?:[A-Za-z]+[ -]?)+[A-Za-z]$/).required().messages({
            "string.pattern.base": "Letters, single dash/space repeated but not ending with dash/space"
        }),
        suite: Joi.string().required(),
        city: Joi.string().regex(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/).required().messages({
            "string.pattern.base": "City does not starts with spaces and ends with a dash"
        }),
        zipcode: Joi.string().regex(/^\d{5}(?:[-\s]\d{4})?$/).required(),
        geo: Joi.object({
            lat: Joi.string().regex(/^(-?\d+(\.\d+)?).\s*(-?\d+(\.\d+)?)$/).required(),
            lng: Joi.string().regex(/^(-?\d+(\.\d+)?).\s*(-?\d+(\.\d+)?)$/).required()
        })
    }),
    phone: Joi.string().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).required(),
    website: Joi.string().regex(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/).required(),
    company: Joi.object({
        name: Joi.string().required(),
        catchPhrase: Joi.string().required(),
        bs: Joi.string().required()
    })
});
export {userValidator};