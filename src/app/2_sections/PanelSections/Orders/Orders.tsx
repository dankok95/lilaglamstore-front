import { useEffect, useState } from "react";
import * as S from "./Orders.styled";
import { TOrder } from "@/app/types/order";
import {
  getOrdersRequest,
  getUserOrdersRequest,
} from "@/app/api/orderRequests";
import { useUserContext } from "@/app/context/user";
import Order from "@/app/1_components/Order/Order";

type OrdersProps = {
  type?: "user" | "admin";
};

const Orders = ({ type }: OrdersProps) => {
  const user = useUserContext();
  const [orders, setOrders] = useState<TOrder[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      if (user) {
        const res =
          type === "admin"
            ? await getOrdersRequest()
            : await getUserOrdersRequest(user._id);
        if (res.success) {
          setOrders(res.orders);
        }
      }
    };
    getOrders();
  }, [user]);

  const renderOrders = () => {
    return orders.map((order) => {
      return <Order key={order._id} order={order} />;
    });
  };
  return <S.Wrapper>{renderOrders()}</S.Wrapper>;
};

export default Orders;
