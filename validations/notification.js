const Joi = require("joi");

const shcema = {
    title: Joi.string().required(),
    content: Joi.string().required()
};

module.exports = shcema;
