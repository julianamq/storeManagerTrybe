const { validateName } = require('./validateJoi');

const validateNameCaracteres = (name) => {
  const { error } = validateName.validate(name);
  if (error) {
     return { message: '"name" length must be at least 5 characters long' };
  }
};

module.exports = { validateNameCaracteres };