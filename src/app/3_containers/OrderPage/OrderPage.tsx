import { TOrder } from "@/app/types/order";
import * as S from "./OrderPage.styled";
import Product from "@/app/1_components/Product/Product";
import Footer from "@/app/1_components/Footer/Footer";
import Header from "@/app/1_components/Header/Header";

type Props = {
  order: TOrder;
};

const OrderPage = ({ order }: Props) => {
  const renderProducts = () => {
    return order.products.map((item) => {
      return (
        <Product key={item.product._id} product={item.product} type="multi" />
      );
    });
  };
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Title>
          Zamówienie <b>{order?._id}</b>{" "}
        </S.Title>
        <S.ProductsWrapper>
          {renderProducts()}
          <S.ConsumerInfo>
            <p>
              {order.user.name} {order.user.surname}
            </p>
            <p>
              Ulica: {order.user.street} {order.user.apartmentNumber}
            </p>
            <p>Kod pocztowy: {order.user.zipCode}</p>
            <p>MIasto: {order.user.city}</p>
            <p>Kraj: {order.user.country}</p>
            <p>Tel: {order.user.phone}</p>
          </S.ConsumerInfo>
        </S.ProductsWrapper>
        <S.Price>
          Kwota:
          {order.products.map((el) => el.product.price * el.quantity)} zł
        </S.Price>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default OrderPage;
