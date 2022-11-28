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

    sinon.stub(salesModel, 'createSales').resolves(mockSales.novaVenda);


    const result = await salesServices.create(mockSales.novaVenda);

    expect(result).to.be.equal(mockSales.retornoVenda)
  });
  it('Testa se é possivel buscar por todas as vendas', async function () {

    sinon.stub(salesModel, 'getAllSales').resolves(mockSales.allSales);


    const result = await salesServices.getAllSales(mockSales.allSales);

    expect(result).to.be.equal(mockSales.allSales)
  });
});
