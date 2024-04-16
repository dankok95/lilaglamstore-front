import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { FaCheck, FaHeart, FaTimes } from "react-icons/fa";
import * as S from "./Product.styled";
import { TProduct } from "@/app/types/product";
import calculateDiscountPercentage from "@/app/utils/calculateDiscountPercentage";
import { Gallery } from "../Gallery/Gallery";
import { useTrolleyContext } from "@/app/context/trolley";
import { translateColor } from "@/app/utils/translateColor";
import Button from "../Button/Button";
import { useUserContext } from "@/app/context/user";
import { markAsFavouriteRequest } from "@/app/api/productRequests";
import { useFavouritesContext } from "@/app/context/favourites";

type Props = {
  product: TProduct;
  onClick?: () => void;
  type: "multi" | "single" | "cart";
};

const lowestPriceDescription = "Najniższa cena w okresie 30 dni przed obniżką:";
const addToCart = "Dodaj do koszyka";
// const colorTitle = "Kolor:";
const sizeTitle = "Rozmiar:";

const Product = ({ product, type, onClick }: Props) => {
  const router = useRouter();
  const user = useUserContext();
  const { favourites } = useFavouritesContext();

  const [showFullDescription, setFullDescription] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    product?.variants?.[0]?.color
  );
  const [isFavorite, setIsFavorite] = useState(false);

  const { trolley, setTrolley } = useTrolleyContext();

  const [selectedSize, setSelectedSize] = useState(
    product?.variants?.[0]?.size
  );

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleTrolley = () => {
    if (Array.isArray(trolley?.items)) {
      const existingItemIndex = trolley.items.findIndex(
        (productItem) =>
          productItem?.product._id === product?._id &&
          productItem?.size === selectedSize &&
          productItem?.color === selectedColor
      );

      if (
        existingItemIndex !== -1 &&
        trolley &&
        existingItemIndex !== undefined
      ) {
        const newItems = [...trolley.items];
        newItems[existingItemIndex].quantity += 1;
        setTrolley((prevTrolley: any) => {
          if (!prevTrolley) return prevTrolley;
          return {
            ...prevTrolley,
            items: newItems,
            photos: prevTrolley.photos ?? [],
          };
        });
      } else {
        const newTrolley: any = trolley
          ? {
              ...trolley,
              items: [
                ...trolley.items,
                {
                  product: product,
                  quantity: 1,
                  size: selectedSize,
                  color: selectedColor,
                },
              ],
            }
          : {
              photos: [],
              items: [
                {
                  product: product,
                  quantity: 1,
                  size: selectedSize,
                  color: selectedColor,
                },
              ],
            };
        setTrolley(newTrolley);
      }
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/${product._id}`);
    }
  };

  const handleColorClick = useCallback(
    (color: string) => setSelectedColor(color),
    [selectedColor]
  );

  const handleSizeClick = useCallback((size: string, index: number) => {
    setSelectedSize(size);
    setSelectedSizeIndex(index);
  }, []);

  const handleFavoriteClick = async () => {
    if (user?._id) {
      await markAsFavouriteRequest(product?._id, user?._id);
    }
  };

  const showFullDescriptionHandler = () =>
    setFullDescription(!showFullDescription);

  const colorCheck =
    selectedColor === "Czarny" || selectedColor === "Niebieski"
      ? "#fff"
      : "#000000";

  const renderCheckIcon = (color: string) =>
    selectedColor === color && (
      <FaCheck
        size={"10px"}
        color={colorCheck}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );

  const renderCheckSize = (size: string, index: number) => (
    <S.SelectedSize $selectedSize={index === selectedSizeIndex}>
      {size.toLocaleUpperCase()}
    </S.SelectedSize>
  );

  const discountPrice = calculateDiscountPercentage({
    price: product?.price,
    lowest_price_last_30_days: product?.lowest_price_last_30_days,
  });

  const isMulti = type === "multi";
  const description = showFullDescription
    ? product?.description
    : product?.description?.slice(0, 100);
  const formattedLowestPrice = `${product?.lowest_price_last_30_days}`;

  useEffect(() => {
    if (
      product?.variants?.length > 0 &&
      product?.variants[0]?.color &&
      router?.query?.productId === product?._id
    ) {
      setSelectedColor(product?.variants?.[0]?.color);
    }
  }, [router?.query?.productId]);

  const tableSizeMock = [
    {
      xs: {
        waistWidth: "45",
        chestWidth: "47",
        totalLength: "133",
        inseamLength: "99",
      },
      s: {
        waistWidth: "45",
        chestWidth: "47",
        totalLength: "133",
        inseamLength: "99",
      },
      m: {
        waistWidth: "45",
        chestWidth: "47",
        totalLength: "133",
        inseamLength: "99",
      },
    },
  ];

  if (type === "multi") {
    return (
      <S.Container $multi={isMulti}>
        <S.Column onClick={handleClick}>
          <S.ProductPhoto
            alt=""
            src={product?.photos?.[0]}
            width={200}
            height={200}
            objectFit="cover"
          />
          <S.DescriptionBox $multi={isMulti}>
            <S.Title $multi={isMulti}>{product?.name}</S.Title>
            <S.Price $multi={isMulti}>{`${product?.price} zł`}</S.Price>
            {product?.lowest_price_last_30_days && discountPrice > 0 && (
              <S.LowestPriceLast30Days $multi={isMulti}>
                {lowestPriceDescription}
                <br />
                {formattedLowestPrice} <span>{` -${discountPrice}%`}</span>
              </S.LowestPriceLast30Days>
            )}
          </S.DescriptionBox>
        </S.Column>
      </S.Container>
    );
  }

  if (type === "single") {
    return (
      <S.Container $multi={isMulti}>
        <Gallery productName={product?.name} images={product?.photos} />
        <S.Box>
          <S.DescriptionBox $multi={isMulti}>
            <S.Title $multi={isMulti}>{product?.name}</S.Title>
            <S.Price $multi={isMulti}>{`${product?.price} zł`}</S.Price>
          </S.DescriptionBox>
          <S.ProductInfo>
            {product?.lowest_price_last_30_days && discountPrice > 0 && (
              <S.LowestPriceLast30Days $multi={isMulti}>
                {lowestPriceDescription} {formattedLowestPrice}{" "}
                <span>{` -${discountPrice}%`}</span>
              </S.LowestPriceLast30Days>
            )}
            {description && (
              <S.ProductDescription>
                <p>{description}</p>
                {product?.description && product?.description?.length > 100 && (
                  <p onClick={showFullDescriptionHandler}>
                    {showFullDescription ? " mniej" : "...więcej"}
                  </p>
                )}
              </S.ProductDescription>
            )}
          </S.ProductInfo>
          {!!product?.variants.length && (
            <S.BoxSelect>
              {/* <S.PropertySectionTitle>
                {colorTitle} {selectedColor}
              </S.PropertySectionTitle>
              <S.SelectBox>
                {product?.variants?.map((variant, index) => (
                  <S.SelectColor
                    key={index}
                    color={translateColor(variant?.color)}
                    onClick={() => handleColorClick(variant.color)}
                  >
                    {renderCheckIcon(variant?.color)}
                  </S.SelectColor>
                ))}
              </S.SelectBox> */}
              <S.PropertySectionTitle>
                {sizeTitle} {selectedSize.toLocaleUpperCase()}
              </S.PropertySectionTitle>
              <S.SelectBox>
                {product?.variants?.map((variant, index) => (
                  <S.SelectSize
                    key={index}
                    $selectedSize={
                      variant.size === selectedSize &&
                      index === selectedSizeIndex
                    }
                    onClick={() => handleSizeClick(variant.size, index)}
                  >
                    {renderCheckSize(variant?.size, index)}
                  </S.SelectSize>
                ))}
              </S.SelectBox>
              {product.variants.length > 0 &&
                !!product.variants[0].totalLength &&
                !!product.variants[0].waistWidth &&
                !!product.variants[0].chestWidth && (
                  <S.SelectBox>
                    <S.ButtonBox>
                      <Button version="secondary" onClick={toggleModal}>
                        Tabela rozmiarów
                      </Button>
                    </S.ButtonBox>

                    {isModalOpen && (
                      <S.ModalOverlay>
                        <S.ModalContent>
                          <S.ModalHeader>Wymiary</S.ModalHeader>
                          <S.ModalSizeList>
                            <S.StyledTable>
                              <thead>
                                <tr>
                                  <th>Rozmiar</th>
                                  <th>Szerokość w pasie (cm)</th>
                                  <th>Szerokość w klatce piersiowej (cm)</th>
                                  <th>Długość całkowita (cm)</th>
                                </tr>
                              </thead>
                              <tbody>
                                {product.variants.map((variant, index) => (
                                  <tr key={index}>
                                    <td>{variant.size}</td>
                                    <td>{variant.waistWidth}</td>
                                    <td>{variant.chestWidth}</td>
                                    <td>{variant.totalLength}</td>
                                    {variant.inseamLength && (
                                      <td>{variant.inseamLength}</td>
                                    )}
                                    {variant.sleeveLength && (
                                      <td>{variant.sleeveLength}</td>
                                    )}
                                  </tr>
                                ))}
                              </tbody>
                            </S.StyledTable>
                          </S.ModalSizeList>
                          <FaTimes
                            onClick={toggleModal}
                            style={{
                              position: "absolute",
                              top: "15px",
                              right: "15px",
                              cursor: "pointer",
                            }}
                            size={20}
                          />
                        </S.ModalContent>
                      </S.ModalOverlay>
                    )}
                  </S.SelectBox>
                )}
            </S.BoxSelect>
          )}
          <S.BoxButtons>
            <S.ButtonAddToCart onClick={handleTrolley}>
              {addToCart}
            </S.ButtonAddToCart>
            <S.ButtonAddToFavorites onClick={handleFavoriteClick}>
              <S.HeartIcon
                size={"20px"}
                color={favourites?.includes(product._id) ? "#d9000c" : "white"}
              />
            </S.ButtonAddToFavorites>
          </S.BoxButtons>
        </S.Box>
      </S.Container>
    );
  }
};

export default Product;
