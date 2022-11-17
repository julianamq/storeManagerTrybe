const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockProducts } = require('../mocks/productsServices.mock');



describe('Products search test controller', function () {
  const STATUS_OK = 200;
  const HTTP_404 = 404;
  it.skip('Busca todos os produtos com sucesso', async function () {
    const response = {};
    const request = { body: {} };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub().resolves();
    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(getProductById.message);

  });

});

