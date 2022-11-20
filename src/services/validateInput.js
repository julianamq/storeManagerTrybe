const validateNameProducts = require('../middlewares/validateNameProducts');

const validateNameRequest = (name) => {
  const { error } = validateNameProducts.validate(name);
  if (error) {
    return { message: '"name" length must be at least 5 characters long' };
  }
};

module.exports = { validateNameRequest };