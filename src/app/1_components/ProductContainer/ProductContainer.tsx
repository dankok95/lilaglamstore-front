import { useTrolleyContext } from "@/app/context/trolley";

import * as S from "./ProductContainer.styled";
import { TProduct } from "@/app/types/product";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { TTrolley } from "@/app/types/trolley";

type Props = {
  // item: TTrolley;
  color?: string;
  quantity?: number;
  size?: string;
  photos?: string[];
  mainInfo?: TProduct;
  type: "drawer" | "cartPage";
  index?: number;
  shouldDisplayActionBox?: boolean;
};

const emptyCartMessage = "Twój koszyk jest pusty";
const quantityLabel = "Ilość:";
const price = "Cena:";
const currencySymbol = "zł";
const addToFavorites = "Dodaj do ulubionych";
const removeFromTrolley = "Usuń";
const colorName = "Kolor:";
const sizeName = "Rozmiar:";

const ProductContainer = ({
  color,
  quantity,
  size,
  photos,
  mainInfo,
  type,
  index,
  shouldDisplayActionBox = true,
}: Props) => {
  const { trolley, setTrolley } = useTrolleyContext();
  const [isFavorite, setIsFavorite] = useState<string[]>([]);

  const handleFavoriteClick = (id: string) => {
    const isCurrentlyFavorite = isFavorite.includes(id);
    if (isCurrentlyFavorite) {
      setIsFavorite(isFavorite.filter((itemId) => itemId !== id));
    } else {
      setIsFavorite([...isFavorite, id]);
    }
  };

  const isDrawer = type === "drawer";

  const removeProduct = (id: string) => {
    if (!trolley || !Array.isArray(trolley.items)) return;

    const existingItemIndex = trolley.items.findIndex(
      (productItem) => productItem.product._id === id
    );

    if (existingItemIndex !== -1) {
      const newItems: any = [...trolley.items];

      newItems[existingItemIndex].quantity -= 1;
      if (newItems[existingItemIndex].quantity === 0) {
        newItems.splice(existingItemIndex, 1);
      }

      setTrolley({ ...trolley, items: newItems });
    }
  };

  return (
    <S.Container $isDrawer={isDrawer}>
      {!isDrawer && !!mainInfo?.photos.length && (
        <S.BoxCartPageImg>
          <S.ProductImage
            src={mainInfo?.photos[0]}
            width={100}
            height={100}
            alt={mainInfo?.name ?? ""}
          />
        </S.BoxCartPageImg>
      )}
      <S.ProductMainInfo>
        {!isDrawer && mainInfo && mainInfo.name && (
          <S.ProductTitle>{mainInfo.name}</S.ProductTitle>
        )}
        <S.ProductWrapper key={index} $isDrawer={isDrawer}>
          {isDrawer && !!mainInfo?.photos.length && (
            <S.ProductImage
              src={mainInfo?.photos[0]}
              width={100}
              height={100}
              alt={mainInfo?.name ?? ""}
            />
          )}
          <S.ProductInfo $isDrawer={isDrawer}>
            {isDrawer && mainInfo && mainInfo.name && (
              <S.ProductTitle>{mainInfo.name}</S.ProductTitle>
            )}
            {quantity && (
              <S.ProductQuantity>
                {`${quantityLabel} ${quantity}`}
              </S.ProductQuantity>
            )}
            {color && (
              <div>
                <S.ProductQuantity>{`${colorName} ${color}`}</S.ProductQuantity>
              </div>
            )}
            {size && (
              <div>
                <S.ProductQuantity>{`${sizeName} ${size.toUpperCase()}`}</S.ProductQuantity>
              </div>
            )}
          </S.ProductInfo>
          {mainInfo && mainInfo.price && quantity && (
            <S.PriceBox>
              <S.ProductPrice $isDrawer={isDrawer}>
                {`${mainInfo.price * quantity} ${currencySymbol}`}
              </S.ProductPrice>
            </S.PriceBox>
          )}
          {isDrawer && mainInfo && mainInfo._id && (
            <S.ActionBox $isDrawer={isDrawer}>
              <S.DeleteBox onClick={() => removeProduct(mainInfo._id)}>
                <S.DeleteIcon />
              </S.DeleteBox>
              <S.AddToFavoritesBox
                onClick={() => handleFavoriteClick(mainInfo._id)}
              >
                <FaRegHeart
                  key={index}
                  size={20}
                  color={
                    isFavorite.includes(mainInfo._id) ? "#d9000c" : "black"
                  }
                />
              </S.AddToFavoritesBox>
            </S.ActionBox>
          )}
        </S.ProductWrapper>
        {!isDrawer && shouldDisplayActionBox && mainInfo && mainInfo._id && (
          <S.ActionBox $isDrawer={isDrawer}>
            <S.DeleteBox onClick={() => removeProduct(mainInfo._id)}>
              <S.DeleteIcon />
              <S.ActionCopy>{removeFromTrolley}</S.ActionCopy>
            </S.DeleteBox>
            <S.AddToFavoritesBox
              onClick={() => handleFavoriteClick(mainInfo._id)}
            >
              <FaRegHeart
                key={index}
                size={20}
                color={isFavorite.includes(mainInfo._id) ? "#d9000c" : "black"}
              />
              <S.ActionCopy>{addToFavorites}</S.ActionCopy>
            </S.AddToFavoritesBox>
          </S.ActionBox>
        )}
      </S.ProductMainInfo>
    </S.Container>
  );
};

export default ProductContainer;
