const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { mockProducts, mockIdProducts } = require('../mocks/productsServices.mock');
const productsController = require('../../../src/controllers/products.controllers');
const productsService = require('../../../src/services/productsServices');
const productsModel = require('./../../../src/models/products.model')

// arranjar(mocks, variaveis),agir, aferir (expect) 
const { expect } = chai;
chai.use(sinonChai);

describe('Controller test', function () {
  beforeEach(() => {
    sinon.restore();
  });

  it('Busca de produtos com a porta Controller getProducts', async function () {
    // sinon.stub(productsController).resolves([mockProducts]);
    // isso é o mock    
    const response = {};
    const request = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsService, 'getProducts').resolves(mockProducts); // para retornar promisse

    await productsController.getProducts(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(mockProducts);

  });
  it('Se o produto é retornado pelo id mensagem 404 ', async function () {
    const response = {};
    const request = { params: { id: '22' } };
    const mock404 = { message: 'Product not found' }

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById').resolves(undefined); // para

    await productsController.getProductById(request, response);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith(mock404);
  });
  it('Chamando todos os produtos.', async function () {
    sinon.stub(productsModel, 'getProducts').resolves(mockProducts);

    const result = await productsService.getProducts();

    expect(result).to.be.deep.equal(mockProducts);
  });
  it('Chamando por id mensagem 200', async function () {
    const response = {};
    const request = { params: { id: '22' } };
    const produto = {
      "id": 1,
      "name": "Martelo de Thor"
    }

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById').resolves(produto);

    await productsController.getProductById(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(produto);
  });
  it('Se todos os produtos são registrados', async function () {
    const response = {};
    const request = {
      body: {
        "id": 1,
        "name": "Martelo de Thor"
      }
    };
    const produto = {
      "id": 1,
      "name": "Martelo de Thor"
    }
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'registerProduct').resolves(produto);
    
    await productsController.registerProducts(request, response);

    expect(response.status).to.have.been.calledWith(201);
    expect(response.json).to.have.been.calledWith(produto);
  });
  it('Se os produtos não são registrados', async function () {
    const response = {};
    const request = {
      body: {
       "name": "Martelo de Thor"
      }
}; 
    const xablau = { message: 'Não definido' };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'registerProduct').resolves({ type: 'error', message: 'Não definido' });
// resolves é o retorno da função 
    await productsController.registerProducts(request, response);

    expect(response.status).to.have.been.calledWith(422);
    expect(response.json).to.have.been.calledWith(xablau);
  })
});