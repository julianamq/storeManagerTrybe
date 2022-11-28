const { validateName } = require('./validateJoi');

const validateNameCaracteres = (name) => {
  const { error } = validateName.validate(name);
  if (error) {
    return { type: 'deu ruim', message: '"name" length must be at least 5 characters long' };
     // type add para que ela exista alguma coisa ( 0, '' string vazia e null e undefined ele considera como false)
  }
};
module.exports = { validateNameCaracteres };