export default interface TransactionItemDto {
  id: string;
  date: Date;
  merchant: string;
  description: string;
  amount: number;
  type: "incoming" | "outgoing";
}
