const Joi = require('joi');

const validateJoi = Joi.string().min(5).required();

module.exports = {
  validateJoi,
};