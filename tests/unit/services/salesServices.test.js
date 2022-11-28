const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const salesServices = require('./../../../src/services/sales.services')
const salesModel = require('./../../../src/models/salesModel');
const mockSales = require('../mocks/mocksales')
const { expect } = chai;
chai.use(sinonChai);

describe('Products search test  Sales Services ', function () {
  beforeEach(() => {
    sinon.restore();
  });

  it('Testa adicionar nova venda em sales', async function () {
    
    sinon.stub(salesModel, 'createSales').resolves(5);
    sinon.stub(salesModel, 'createRegister').resolves();


    const result = await salesServices.create(mockSales.novaVenda);

    expect(result).to.be.deep.equal({ "id": 5, "items": [{ "productId": 1, "quantity": 1 }] });
    
  });
  it('Testa se é possivel buscar por todas as vendas', async function () {

    sinon.stub(salesModel, 'getAllSales').resolves(mockSales.allSales);


    const result = await salesServices.getAllSales();

    expect(result).to.be.equal(mockSales.allSales)
  });
  it('Testa se deleta', async function () { 
    sinon.stub(salesModel, 'deleteSales').resolves();
    const result = await salesServices.deleteSales(33);
    expect(result).to.be.deep.equal({ type: 'error', message: 'Sale not found' });
  });
  it('Testa se deleta corretamente', async function () {
    sinon.stub(salesModel, 'deleteSales').resolves({});
    const result = await salesServices.deleteSales(3);
    expect(result).to.be.deep.equal({ type: null });
  });
});
