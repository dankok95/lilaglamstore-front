import { TProduct } from "./product";

export type TTrolleyProduct = {
  color: string;
  product: TProduct;
  quantity: number;
  size: string;
};
export type TTrolley = {
  photos: string[];
  items: TTrolleyProduct[];
};
