export interface InvestItemDto {
  id: string;
  type: "cause" | "education" | "sustainablity";
  title: string;
  description: string;
  startDate: Date;
  expirationDate: Date;
  coverPhoto: string;
}

export interface InvestCategory {
  id: string;
  type: "cause" | "education" | "sustainablity";
  title: string;
  description: string;
  startDate: Date;
  expirationDate: Date;
  coverPhoto: string;
  invest: InvestItemDto[];
}
