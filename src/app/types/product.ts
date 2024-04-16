type TVariant = {
  size: string;
  color: string;
  quantity: number;
  waistWidth: number;
  chestWidth: number;
  totalLength: number;
  inseamLength?: number;
  sleeveLength?: number;
};

export type TProduct = {
  color?: string;
  category: string;
  description?: string;
  lowest_price_last_30_days: number;
  name: string;
  photos: string[];
  price: number;
  variants: TVariant[];
  _id: string;
  quantity?: number;
  size?: string;
};
