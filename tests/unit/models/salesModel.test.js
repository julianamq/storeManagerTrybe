const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const salesServices = require('./../../../src/services/sales.services')
const salesModels = require('./../../../src/models/salesModel');
const mockSales = require('../mocks/mocksales');
const { expect } = chai;
chai.use(sinonChai);

describe('testa salesmodel', function () {
  beforeEach(() => {
    sinon.restore();
  });

  it.skip('se cria nova venda em sales', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 3 }]);

    const result = await salesModels.createSales();
    expect(result).to.equal(3);
  });
  it.skip('se cria o registro', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 3 }]);

    const result = await salesModels.createRegister(3, mockSales.novaVenda[0]);

    expect(result).to.equal(3);
  });
});
