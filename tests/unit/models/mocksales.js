const novaVenda = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const retornoVenda = {
  id: 3,
  itemsSold: novaVenda,
};

const semProduto = [
  {
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];

const semQuantidade = [
  {
    "productId": 1,
  },
  {
    "productId": 2,
    "quantity": 5
  }
];

const idErrado = [
  {
    "productId": "a",
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const qtdeErrada = [
  {
    "productId": 1,
    "quantity": 0
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const allSales = [
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

const saleByID = [
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
];

const saleUpdate = [
  {
    "productId": 1,
    "quantity": 5
  },
  {
    "productId": 2,
    "quantity": 3
  }
];

const successUpdate = { type: null, message: { saleId: 1, itemsUpdated: saleUpdate } }

module.exports = { semProduto, retornoVenda, semQuantidade, idErrado, qtdeErrada, allSales, saleByID, saleUpdate }