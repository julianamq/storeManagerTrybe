const { validateName } = require('./validateJoi');

const validateNameCaracteres = (name) => {
  const { error } = validateName.validate(name);
  if (error) {
     return { type: 'deu ruim', message: '"name" length must be at least 5 characters long' };
  }
};

module.exports = validateNameCaracteres;