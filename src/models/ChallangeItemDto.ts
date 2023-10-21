export default interface ChallangeItemDto {
  id: string;
  type: "personal" | "group";
  title: string;
  description: string;
  startDate: Date;
  expirationDate: Date;
  coverPhoto: string;
}
