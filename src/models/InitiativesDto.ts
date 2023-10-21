export interface InitiativesItemDto {
  id: string;
  type: "cause" | "education" | "sustainablity";
  title: string;
  description: string;
  startDate: Date;
  expirationDate: Date;
  coverPhoto: string;
  location: string;
}

export interface InitiativesCategory {
  id: string;
  type: "cause" | "education" | "sustainablity";
  title: string;
  description: string;
  startDate: Date;
  expirationDate: Date;
  coverPhoto: string;
  initiatives: InitiativesItemDto[];
}
