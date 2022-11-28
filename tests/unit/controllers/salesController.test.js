const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesService = require('../../../src/services/sales.services');
const salesController = require('../../../src/controllers/salesController');
const { expect } = chai;
chai.use(sinonChai);

describe('Controller test', function () {
  beforeEach(() => {
    sinon.restore();
  });
  const mockSales = {
    "id": 1,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  }
  it('Testar se é criado as vendas', async function () {
    const response = {};
    const request = {
      body:

        [
          {
            "productId": 1,
            "quantity": 1
          },
          {
            "productId": 2,
            "quantity": 5
          }
        ]

    };
    // const message = 'Sale not found';
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(salesService, 'create').resolves({ id: 1, type: null, message: 'not found' });
    // para retornar promisse

    await salesController.createSales(request, response);

    expect(response.status).to.have.been.calledWith(201);
    expect(response.json).to.have.been.calledWith(mockSales);

  });
  it('Testar se é retornado a mensagem 404', async function () {

    const response = {};
    const request = {
      params: { id: '22' }
    };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(salesService, 'create').resolves({ type: 'ju', message: 'Sale not found' }); // para

    await salesController.createSales(request, response);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith({ message: 'Sale not found' });

  });
  it('Testar se é deletada as vendas', async function () {

    const response = {};
    const request = { params: { id: '22' } };
    const message = { message: 'Sale not found' }
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(salesService, 'deleteSales').resolves({ type: 'error', message: 'Sale not found' });
    await salesController.deleteSales(request, response);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith(message);

  });
  it('Testar se é deletada as vendas corretamente', async function () {

    const response = {};
    const request = { params: { id: '22' } };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(salesService, 'deleteSales').resolves({  message: 'Sale not found' });
    await salesController.deleteSales(request, response);

    expect(response.status).to.have.been.calledWith(204);
    expect(response.json).to.have.been.calledWith({ message: 'Sale not found' });

  });
  it('Testar se dá para pegar pelo id', async function () {

    const response = {};
    const request = { params: { id: '1' } };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(salesService, 'getSalesById').resolves(1);
    await salesController.getSalesById(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(1);

  });
  it('Testar se dá para pegar todas as vendas', async function () {

    const response = {};
    const request = { params: { id: '1' } };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(salesService, 'getAllSales').resolves(1);
    await salesController.getAllSales(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(1);

  });
});
