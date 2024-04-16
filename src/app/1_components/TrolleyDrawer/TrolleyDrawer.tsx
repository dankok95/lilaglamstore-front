import { useTrolleyContext } from "@/app/context/trolley";
import Button from "../Button/Button";

import * as S from "./TrolleyDrawer.styled";
import { useRouter } from "next/router";
import ProductContainer from "../ProductContainer/ProductContainer";

type Props = {
  setIsDrawerVisible: (value: boolean) => void;
};

const cart = "Koszyk:";
const total = "Suma:";
const currencySymbol = "zł";

const TrolleyDrawer = ({ setIsDrawerVisible }: Props) => {
  const router = useRouter();
  const { trolley } = useTrolleyContext();
  const getTotalPrice = () => {
    let totalPrice = 0;
    if (Array.isArray(trolley?.items)) {
      trolley.items.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
      });
    }
    return totalPrice;
  };

  return (
    <S.Wrapper
      onClick={() => setIsDrawerVisible(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.Drawer
        initial={{ x: 400 }}
        animate={{ x: [400, 0] }}
        exit={{ x: 400 }}
        transition={{ type: "tween", duration: "0.3" }}
        onClick={(e) => e.stopPropagation()}
      >
        <S.CloseIcon onClick={() => setIsDrawerVisible(false)} />
        <S.Spacer />
        <S.Title>{cart}</S.Title>
        <S.ProductsWrapper>
          {Array.isArray(trolley?.items) &&
            trolley.items.map((item, index) => (
              <ProductContainer
                key={index}
                type="drawer"
                color={item.color}
                quantity={item.quantity}
                size={item.size}
                photos={trolley.photos}
                mainInfo={item.product}
              />
            ))}
        </S.ProductsWrapper>
        {!!trolley?.items && (
          <S.BottomBar>
            <div>
              {total}{" "}
              <b>
                {getTotalPrice()}
                {currencySymbol}
              </b>
            </div>
            <Button onClick={() => router.push("/cart")}>Zamów</Button>
          </S.BottomBar>
        )}
      </S.Drawer>
    </S.Wrapper>
  );
};

export default TrolleyDrawer;
