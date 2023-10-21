// export default interface TransactionItemDto {
//   id: string;
//   date: Date;
//   merchant: string;
//   description: string;
//   amount: number;
//   type: "incoming" | "outgoing";
// }

export default interface TransactionObject {
  id: string;
  footPrintPoints: number;
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
