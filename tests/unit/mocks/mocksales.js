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

const retornoVenda = { id: 14, items: [{ productId: 1, quantity: 1 }] };

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
  },
  {
    "saleId": 3,
    "productId": 1,
    "quantity": 5,
    "date": "2022-11-28T14:37:04.000Z"
  },
  {
    "saleId": 3,
    "productId": 2,
    "quantity": 10,
    "date": "2022-11-28T14:37:04.000Z"
  },
  {
    "saleId": 3,
    "productId": 3,
    "quantity": 15,
    "date": "2022-11-28T14:37:04.000Z"
  },
  {
    "saleId": 4,
    "productId": 1,
    "quantity": 5,
    "date": "2022-11-28T14:44:39.000Z"
  },
  {
    "saleId": 4,
    "productId": 2,
    "quantity": 10,
    "date": "2022-11-28T14:44:39.000Z"
  },
  {
    "saleId": 4,
    "productId": 3,
    "quantity": 15,
    "date": "2022-11-28T14:44:39.000Z"
  },
  {
    "saleId": 5,
    "productId": 1,
    "quantity": 5,
    "date": "2022-11-28T14:46:25.000Z"
  },
  {
    "saleId": 5,
    "productId": 2,
    "quantity": 10,
    "date": "2022-11-28T14:46:25.000Z"
  },
  {
    "saleId": 5,
    "productId": 3,
    "quantity": 15,
    "date": "2022-11-28T14:46:25.000Z"
  },
  {
    "saleId": 6,
    "productId": 1,
    "quantity": 5,
    "date": "2022-11-28T14:50:14.000Z"
  },
  {
    "saleId": 6,
    "productId": 2,
    "quantity": 10,
    "date": "2022-11-28T14:50:14.000Z"
  },
  {
    "saleId": 6,
    "productId": 3,
    "quantity": 15,
    "date": "2022-11-28T14:50:14.000Z"
  },
  {
    "saleId": 7,
    "productId": 1,
    "quantity": 1,
    "date": "2022-11-28T14:58:04.000Z"
  },
  {
    "saleId": 7,
    "productId": 2,
    "quantity": 5,
    "date": "2022-11-28T14:58:04.000Z"
  },
  {
    "saleId": 8,
    "productId": 1,
    "quantity": 1,
    "date": "2022-11-28T14:59:03.000Z"
  },
  {
    "saleId": 8,
    "productId": 2,
    "quantity": 5,
    "date": "2022-11-28T14:59:03.000Z"
  },
  {
    "saleId": 9,
    "productId": 1,
    "quantity": 1,
    "date": "2022-11-28T15:00:31.000Z"
  },
  {
    "saleId": 9,
    "productId": 2,
    "quantity": 5,
    "date": "2022-11-28T15:00:31.000Z"
  },
  {
    "saleId": 10,
    "productId": 1,
    "quantity": 1,
    "date": "2022-11-28T15:02:11.000Z"
  },
  {
    "saleId": 10,
    "productId": 2,
    "quantity": 5,
    "date": "2022-11-28T15:02:11.000Z"
  },
  {
    "saleId": 11,
    "productId": 1,
    "quantity": 1,
    "date": "2022-11-28T15:11:35.000Z"
  },
  {
    "saleId": 11,
    "productId": 2,
    "quantity": 5,
    "date": "2022-11-28T15:11:35.000Z"
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

module.exports = { novaVenda,semProduto, retornoVenda, semQuantidade, idErrado, qtdeErrada, allSales, saleByID, saleUpdate }