export type CategoryType = "pants" | "shirts" | "shoes";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  rating: number;
  category: CategoryType;
  imageSource: string;
  creationDate?: number;
}
