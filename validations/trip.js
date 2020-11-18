const Joi = require("joi");

const shcema = {
    desteinationName: Joi.string().required(),
};

module.exports = shcema;
