const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { mockProducts } = require('../mocks/productsServices.mock');

const productsModel = require('./../../../src/models/products.model')

// arranjar(mocks, variaveis),agir, aferir (expect) 
const { expect } = chai;
chai.use(sinonChai);

describe('Products search test', function () {
  const STATUS_OK = 200;
  const HTTP_404 = 404;
  it('Busca de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mockProducts]);

    const buscaProduto = await productsModel.getProducts();

    expect(buscaProduto).to.equal(mockProducts);
   
  });


});