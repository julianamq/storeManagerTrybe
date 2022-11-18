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
  beforeEach(() => {
    sinon.restore();
  });
  const STATUS_OK = 200;
  const HTTP_404 = 404;
  it('Busca de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([[mockProducts]]);

    const buscaProduto = await productsModel.getProducts();

    expect(buscaProduto).to.equal(mockProducts);
   
  });
  it('Chamando todos os produtos.', async function () {
    sinon.stub(productsModel, 'getProducts').resolves(mockProducts);

    const result = await productsModel.getProducts();
    console.log(result)
   
    expect(result).to.be.deep.equal(mockProducts);
  });
  it('Chamando por id.', async function () {
    sinon.stub(productsModel, 'getProductById').resolves(mockProducts);

    const result = await productsModel.getProductById(22);

    expect(result).to.be.deep.equal(mockProducts);
  });
  // afterEach(sinon.restore);
});


