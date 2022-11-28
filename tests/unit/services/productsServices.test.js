const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { mockProducts } = require('../mocks/productsServices.mock');
const productsService = require('./../../../src/services/productsServices')
const productsModels = require('./../../../src/models/products.model');
const validateNameCaracteres  = require('../../../src/middlewares/validateRequest');
 
// arranjar(mocks, variaveis),agir, aferir (expect) 
const { expect } = chai;
chai.use(sinonChai);

describe('Products search test Services', function () {
  beforeEach(() => {
    sinon.restore();
  });

  it('Busca de produtos Services', async function () {
    sinon.stub(connection, 'execute').resolves([mockProducts]);

    const buscaProduto = await productsService.getProducts();

    expect(buscaProduto).to.equal(mockProducts);

  });
  it('Chamando por id.', async function () {
    sinon.stub(productsModels, 'getProductById').resolves(mockProducts);

    const result = await productsService.getProductById(22);

    expect(result).to.be.deep.equal(mockProducts);
  });
  it('se a mensagem aparece', async function () {
    const mensagem = { message: 'Product not found' };
    sinon.stub(productsModels, 'getProductById').resolves();
    const result = await productsService.getProductById();
    expect(result).to.be.deep.equal(undefined)
   
  });
  it('Se o produto é registrado', async function () {
    
    sinon.stub(productsModels, 'registerProducts').resolves(5);
    sinon.stub(productsModels, 'getProductById').resolves({ id: 5, name: 'camila' });
    const result = await productsService.registerProduct("camila");
    expect(result).to.be.deep.equal({ id: 5, name: 'camila' })

  });
  it('Se o produto é validado', async function () {

    sinon.stub(validateNameCaracteres, 'validateNameCaracteres').resolves(true);
    const result = await productsService.registerProduct('sol')
    expect(result).to.be.deep.equal(true)

  });
  it('Se é realizado o update', async function () {

    sinon.stub(productsModels, 'updateProduct').resolves({ affectedRows :1 });
    sinon.stub(productsModels, 'getProductById').resolves({ id: 5, name: 'camila' } );
    const result = await productsService.updateProduct(5,'camila');
    expect(result).to.be.deep.equal({
      "type": null,
      "message":
        { id: 5, name: 'camila' }
    })

  });
  it('delete PRODUTO', async function () {
    sinon.stub(productsModels, 'deleteProduct').resolves(1);
    const result = await productsService.deleteProduct(3);
    expect(result).to.be.deep.equal({type: null})
})
});