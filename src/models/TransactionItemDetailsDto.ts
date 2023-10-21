export default interface TransactionItemDetailsDto {
  id: string;
  transaction: TransactionInfo;
  merchant: {
    name: string;
    category: string;
  };
  invoiceDetails: {
    id: string;
    totalPrice: number;
    productList: ProductInfo[];
  };
}

export interface ProductInfo {
  product: Product;
  transactionDetails: {
    amount: number;
  };
}
export interface TransactionInfo {
  id: string;
  totalAmount: number;
  type: "incoming" | "outgoing";
  createdOn: Date;
  carboonFootrpintType: "low" | "medium" | "high";
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
}

export interface ProductCategory {
  id: string;
  name: string;
}
