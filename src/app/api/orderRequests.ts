import { TProduct } from "../types/product";
import { TTrolleyProduct } from "../types/trolley";
import instance from "./instance";

export const addOrderRequest = async (
  user: string,
  products: Array<{ product: string; quantity: number }>
) => {
  try {
    const res = await instance("/api/order/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { user, products },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getUserOrdersRequest = async (userId: string) => {
  try {
    const res = await instance({
      url: `/api/order/user/${userId}`,
      method: "GET",
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getSingleOrderRequest = async (orderId: string) => {
  try {
    const res = await instance({
      url: `/api/order/${orderId}`,
      method: "GET",
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getOrdersRequest = async () => {
  try {
    const res = await instance({
      url: "/api/order",
      method: "GET",
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const sendPaymentRequest = async (
  userId: string,
  products: TTrolleyProduct[],
  data: Object
) => {
  try {
    const res = await instance({
      url: "/api/order/payment",
      method: "POST",
      data: { userId, products, userInformation: data },
    });

    return res.data;
  } catch (error) {
    return error;
  }
};
