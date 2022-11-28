const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const salesServices = require('./../../../src/services/sales.services')
const salesModel = require('./../../../src/models/salesModel');
const productsModels = require('../../../src/services/salesValidate')
const { expect } = chai;
chai.use(sinonChai);

describe('Products search test  Sales Services ', function () {
  beforeEach(() => {
    sinon.restore();
  });
  const salesById = [
    {
      "date": "2022-11-28T12:03:57.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "date": "2022-11-28T12:03:57.000Z",
      "productId": 2,
      "quantity": 10
    }
  ]
  const mockSales = [
    {
      "saleId": 1,
      "productId": 1,
      "quantity": 5,
      "date": "2022-11-28T12:03:57.000Z"
    },
    {
      "saleId": 1,
      "productId": 2,
      "quantity": 10,
      "date": "2022-11-28T12:03:57.000Z"
    },
    {
      "saleId": 2,
      "productId": 3,
      "quantity": 15,
      "date": "2022-11-28T12:03:57.000Z"
    }
  ];
  const novaVenda = [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ];
  it('Testa adicionar nova venda em sales', async function () {

    sinon.stub(salesModel, 'getAllSales').resolves(mockSales);


    const result = await salesServices.create( [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]);

    expect(result).to.be.equal(mockSales)
  });
});
