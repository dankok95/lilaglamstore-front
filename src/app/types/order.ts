import { TProduct } from "./product";
import { User } from "./user";

export type TOrder = {
  _id: string;
  user: User;
  number: string;
  products: Array<{
    color: string;
    size: string;
    product: TProduct;
    quantity: number;
  }>;
  payment: {
    id: string;
    status: string;
  };
  userInformation: {
    name: string;
    surname: string;
    country: string;
    city: string;
    zipCode: string;
    street: string;
    apartmentNumber: string;
    houseNumber: string;
    phone: string;
    message: string;
  };
  delivered: boolean;
  createdAt: string;
};
