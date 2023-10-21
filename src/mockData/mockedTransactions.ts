import TransactionItemDetailsDto from "../models/TransactionItemDetailsDto";

export const mockTransactions: TransactionItemDetailsDto[] = [
  {
    id: "1",
    transaction: {
      id: "1",
      totalAmount: 999,
      type: "outgoing",
      createdOn: new Date(),
      carboonFootrpintType: "high",
    },
    merchant: { name: "Lidl", category: "food" },
    invoiceDetails: {
      id: "1",
      totalPrice: 10,
      productList: [
        {
          product: {
            id: "1",
            name: "Banana",
            category: { id: "1", name: "fruits" },
          },
          transactionDetails: {
            amount: 5,
          },
        },
        {
          product: {
            id: "2",
            name: "Orange",
            category: { id: "1", name: "vegetables" },
          },
          transactionDetails: {
            amount: 5,
          },
        },
        {
          product: {
            id: "3",
            name: "Eggs",
            category: { id: "1", name: "basic" },
          },
          transactionDetails: {
            amount: 5,
          },
        },
      ],
    },
  },
  {
    id: "2",
    transaction: {
      id: "2",
      totalAmount: 59,
      type: "incoming",
      createdOn: new Date(),
      carboonFootrpintType: "low",
    },
    merchant: { name: "Reserved", category: "clothes" },
    invoiceDetails: {
      id: "1",
      totalPrice: 99.99,
      productList: [
        {
          product: {
            id: "432",
            name: "T-shirt",
            category: { id: "1", name: "clothes" },
          },
          transactionDetails: {
            amount: 125,
          },
        },
        {
          product: {
            id: "333",
            name: "Shirt",
            category: { id: "1", name: "clothes" },
          },
          transactionDetails: {
            amount: 55,
          },
        },
        {
          product: {
            id: "35435",
            name: "Shirt",
            category: { id: "1", name: "clothes" },
          },
          transactionDetails: {
            amount: 45,
          },
        },
      ],
    },
  },
  {
    id: "3",
    transaction: {
      id: "3",
      totalAmount: 59,
      type: "outgoing",
      createdOn: new Date(),
      carboonFootrpintType: "medium",
    },
    merchant: { name: "Balev", category: "food" },
    invoiceDetails: {
      id: "1",
      totalPrice: 99.99,
      productList: [
        {
          product: {
            id: "432",
            name: "T-shirt",
            category: { id: "1", name: "clothes" },
          },
          transactionDetails: {
            amount: 125,
          },
        },
        {
          product: {
            id: "333",
            name: "Shirt",
            category: { id: "1", name: "clothes" },
          },
          transactionDetails: {
            amount: 55,
          },
        },
        {
          product: {
            id: "35435",
            name: "Shirt",
            category: { id: "1", name: "clothes" },
          },
          transactionDetails: {
            amount: 45,
          },
        },
      ],
    },
  },
];
