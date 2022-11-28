const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesService = require('../../../src/services/sales.services');
const salesController = require('../../../src/controllers/salesController');
// arranjar(mocks, variaveis),agir, aferir (expect) 
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

    sinon.stub(salesService, 'create').resolves({ id:1, type: null, message: 'not found' });
     // para retornar promisse

    await salesController.createSales(request, response);

    expect(response.status).to.have.been.calledWith(201);
    expect(response.json).to.have.been.calledWith(mockSales);

  });
  it('Testar se é retornado a mensagem 404', async function () {
  
    const response = {};
    const request = { params: { id: '22' } }; // esta faltando colcoar algo em params
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(salesController.createSales, 'create').resolves({  message: 'Sale not found' }); // para

    await salesController.createSales(request, response);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith({ message: 'Sale not found' });

  });
  it('Testar se é deletada as vendas', async function () {

    const response = {};
    const request = { params: { id: '22' } }; // esta faltando colcoar algo em params
  
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(salesController.deleteProduct, 'deleteProduct').resolves(mockSales); // para

    await salesController.deleteProduct(request, response);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).not.to.have.been.calledWith(mockSales);

  });
});
