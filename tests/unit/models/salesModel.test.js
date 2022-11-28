const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const salesServices = require('./../../../src/services/sales.services')
const salesModels = require('./../../../src/models/salesModel');
const mockSales = require('../mocks/mocksales');
const { expect } = chai;
chai.use(sinonChai);

describe('testa sales model', function () {
  beforeEach(() => {
    sinon.restore();
  });

  it('se cria nova venda em sales', async function () {
    sinon.stub(connection, 'execute').resolves([{
      insertId: 3
    }]);

    const result = await salesModels.createSales();
    expect(result).to.equal(3);
  });
  it('se cria o registro', async function () {
    sinon.stub(connection, 'execute').resolves(mockSales.novaVenda);

    const result = await salesModels.createRegister([mockSales.retornoVenda]);

    expect(result).to.equal(null);
  });
  it('se pega todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([mockSales.allSales]);

    const result = await salesModels.getAllSales();

    expect(result).to.equal(mockSales.allSales);
  });
  it('Se pega as vendas por id', async function () {
    sinon.stub(connection, 'execute').resolves([mockSales.saleByID]);

    const result = await salesModels.getSalesById();

    expect(result).to.equal(mockSales.saleByID);

  });
  it('Se é deletada as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([mockSales.semProduto]);

    const result = await salesModels.deleteSales();

    expect(result).to.equal(mockSales.semProdut);

  });
});
