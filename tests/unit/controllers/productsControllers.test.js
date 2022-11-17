const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { expect } = chai;
chai.use(sinonChai);

const productsService = require('../../../src/services/productsServices');
const productsController = require('../../../src/controllers/products.controllers')
const { mockProducts,
  mockIdProducts } = require('./mocks/productsControllers.mock');
const { resource } = require('../../../src/app');


describe('Products search test', function () {
  const STATUS_OK = 200;
  const HTTP_404 = 404;
  it('Busca todos os produtos com sucesso', async function () {
    const response = {};
    const request = { body: {} };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(mockProducts).resolves();
    expect(response.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getProductById.message);

  });
  it('Se a função getProducts está buscando os produtos', async function () {

});
});

