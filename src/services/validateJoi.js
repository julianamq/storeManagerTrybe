const Joi = require('joi');

const validateName = Joi.string().min(5).required();
const validateId = Joi.number().integer().min(1).required();

const validationIndId = (id) => {
  const { error } = validateId.validate(id);
  if (error) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Wrong id format' };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateName,
  validateId,
  validationIndId,
};