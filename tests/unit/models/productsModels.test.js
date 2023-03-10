const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { mockProducts } = require('../mocks/productsServices.mock');
const productsService = require('./../../../src/services/productsServices')
const productsModel = require('./../../../src/models/products.model');
const { func } = require('joi');

// arranjar(mocks, variaveis),agir, aferir (expect) 
const { expect } = chai;
chai.use(sinonChai);

describe('Products search test Models', function () {
  beforeEach(() => {
    sinon.restore();
  });

  it('Busca de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mockProducts]);

    const buscaProduto = await productsModel.getProducts();

    expect(buscaProduto).to.be.deep.equal(mockProducts);

  });
  it('Chamando por id.', async function () {
    const product = {
      "id": 1,
      "name": "Martelo de Thor"
    };
    sinon.stub(connection, 'execute').resolves([mockProducts]);
    const result = await productsService.getProductById(product);
    expect(result).to.be.deep.equal(product);
  });
  it('se registra produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    const result = await productsModel.registerProducts("carrinho de mão")
    expect(result).to.be.equal(4);
  });
  it('se há update no produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 3 }]);
    const result = await productsModel.updateProduct("carrinho de mão")
    expect(result).to.be.deep.equal({ insertId: 3 });
  });
});


