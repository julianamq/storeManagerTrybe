const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { mockProducts } = require('../mocks/productsServices.mock');
const productsService = require('./../../../src/services/productsServices')
const productsModels = require('./../../../src/models/products.model')

// arranjar(mocks, variaveis),agir, aferir (expect) 
const { expect } = chai;
chai.use(sinonChai);

describe('Products search test Services', function () {
  beforeEach(() => {
    sinon.restore();
  });

  it('Busca de produtos Services', async function () {
    sinon.stub(connection, 'execute').resolves([mockProducts]);

    const buscaProduto = await productsService.getProducts();

    expect(buscaProduto).to.equal(mockProducts);

  });
  it('Chamando por id.', async function () {
    sinon.stub(productsModels, 'getProductById').resolves(mockProducts);

    const result = await productsService.getProductById(22);

    expect(result).to.be.deep.equal(mockProducts);
  });
  it('se a mensagem aparece', async function () {
    const mensagem = { message: 'Product not found' };
    sinon.stub(productsModels, 'getProductById').returns();
    const result = await productsService.getProductById(0);
    expect(result).to.have.been.calledWith(mensagem)
   
  });

});