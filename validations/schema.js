const Joi = require("joi");

const shcema = {
    name: Joi.string().required(),
    mobile: Joi.string().regex(/^(010|011|012)[0-9]{8}$/).required(),
    email: Joi.string().email().required(),
};

module.exports = shcema;
