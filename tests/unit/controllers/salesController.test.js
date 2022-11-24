const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

// arranjar(mocks, variaveis),agir, aferir (expect) 
const { expect } = chai;
chai.use(sinonChai);

describe('Controller test', function () {
  beforeEach(() => {
    sinon.restore();
  });
  const mockSales = {
    "id": 3,
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
  it('Lista se é pego todas as vendas status 200', async function () { 
    const response = {};
    const request = {};
    const message = 'Sale not found';
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(salesService, 'getSalesById').resolves(mockSales); // para retornar promisse

    await productsController.getProducts(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(message);

  });
});
