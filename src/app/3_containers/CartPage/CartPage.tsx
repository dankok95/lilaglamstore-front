import { useTrolleyContext } from "@/app/context/trolley";
import * as S from "./CartPage.styled";
import Button from "@/app/1_components/Button/Button";
import { useRouter } from "next/router";
import ProductContainer from "@/app/1_components/ProductContainer/ProductContainer";
import Footer from "@/app/1_components/Footer/Footer";
import Header from "@/app/1_components/Header/Header";

const cart = "Koszyk";
const summary = "Podsumowanie";
const totalPrice = "Łącznie: ";
const goToCheckoutButton = "Przejdź do kasy";

const CartPage = () => {
  const { trolley } = useTrolleyContext();
  const router = useRouter();

  const getTotalPrice = () => {
    let totalPrice = 0;
    if (Array.isArray(trolley?.items)) {
      trolley.items.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
      });
    }
    return totalPrice.toFixed(2);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Box>
          <S.TrolleyBox>
            <h3>{`${cart} (${
              Array.isArray(trolley?.items) ? trolley.items.length : 0
            })`}</h3>
            <S.Spacer />
            {Array.isArray(trolley?.items) &&
              trolley.items.map((item, index) => (
                <ProductContainer
                  key={index}
                  type="cartPage"
                  color={item?.color}
                  quantity={item?.quantity}
                  size={item?.size}
                  mainInfo={item?.product}
                />
              ))}
          </S.TrolleyBox>
          <S.SummaryBox>
            <h3>{summary}</h3>
            <S.Spacer />
            <S.SummaryInfo>
              <S.TotalPrice>{`${totalPrice} ${getTotalPrice()} zł`}</S.TotalPrice>
              <Button onClick={() => router.push(`/checkout`)}>
                {goToCheckoutButton}
              </Button>
            </S.SummaryInfo>
          </S.SummaryBox>
        </S.Box>
      </S.Container>
      <Footer />
    </>
  );
};

export default CartPage;
