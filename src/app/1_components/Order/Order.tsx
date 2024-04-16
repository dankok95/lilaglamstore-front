import { TOrder } from "@/app/types/order";
import * as S from "./Order.styled";
import { formatDate } from "@/app/utils/formatDate";
import { useRouter } from "next/router";

type Props = {
  order: TOrder;
};

const Order = ({ order }: Props) => {
  const router = useRouter();
  return (
    <S.Wrapper onClick={() => router.push(`/order/${order._id}`)}>
      <S.Title>Zamówienie</S.Title>
      <b>{order.number}</b>
      <S.Date>z dnia {formatDate(order.createdAt)}</S.Date>
    </S.Wrapper>
  );
};

export default Order;
