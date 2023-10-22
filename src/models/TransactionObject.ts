export default interface TransactionObject {
  id: string;
  type: "low" | "medium" | "high";
  createdOn: Date;
  footPrintPoints: number;
  vendor: string;
  totalPrice: string;
  invoiceRows: InvoiceRows[];
}

export interface InvoiceRows {
  amount: number;
  rowCarbonKgs: number;
  rowPrice: number;
  product: Product;
}

export interface Product {
  carbonDbId: string;
  co2eTotal: number;

  factor: number;
  id: string;
  name: string;
  sector: string;
  singlePrice: number;
  type: null;
}
