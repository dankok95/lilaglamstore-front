import Image from "next/image";
import styled from "styled-components";
import { FaHeart, FaRegTrashAlt } from "react-icons/fa";
import { media } from "@/app/utils/media";

interface TrolleyProductTypeProps {
  $isDrawer?: boolean;
}

interface ProductTypeProps {
  $multi?: boolean;
}

interface ColorProps {
  $color?: string;
  isSelected?: boolean;
}

interface SizeProps {
  $selectedSize?: boolean;
}

export const Container = styled.div<ProductTypeProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $multi }) => ($multi ? "inherit" : "space-between;")};
  width: 100%;
  max-width: ${({ $multi }) => ($multi ? "250px" : "1400px")};
  height: ${({ $multi }) => ($multi ? "400px" : "100%")};
  margin: ${({ $multi }) => ($multi ? "0" : "0 auto 40px")};
  background-color: white;
  box-shadow: 6px 6px 32px rgba(0, 0, 0, 0.1);

  ${media.tablet} {
    height: ${({ $multi }) => ($multi ? "400px" : "840px")};
    flex-direction: ${({ $multi }) => ($multi ? "column" : "row")};
    margin: ${({ $multi }) => ($multi ? "0" : "60px auto 40px")};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 30px;
  background-color: white;
  box-shadow: 6px 6px 32px rgba(0, 0, 0, 0.1);

  ${media.tablet} {
    width: 60%;
    height: 840px;
    padding: 100px 40px;
  }
`;

export const BoxGallery = styled.div`
  width: 100%;
  height: 840px;
`;

export const ProductPhoto = styled(Image)`
  width: 250px;
  height: 345px;
  padding: 20px 20px 10px 20px;
  opacity: 0.9;
  object-fit: cover;
  cursor: pointer;
`;

export const DescriptionBox = styled.div<ProductTypeProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $multi }) => ($multi ? "3px" : "15px")};
  padding: ${({ $multi }) => ($multi ? "0 20px" : "0")};
  font-size: 16px;
  color: #1a1a1a;
`;

export const Title = styled.h3<ProductTypeProps>`
  font-size: ${({ $multi }) => ($multi ? "17px" : "22px")};
  font-weight: ${({ $multi }) => ($multi ? "normal" : "bold")};

  ${media.mobile} {
    font-size: ${({ $multi }) => ($multi ? "17px" : "30px")};
  }
`;

export const Price = styled.p<ProductTypeProps>`
  font-size: ${({ $multi }) => ($multi ? "16px" : "20px")};
  font-weight: bold;

  ${media.mobile} {
    font-size: ${({ $multi }) => ($multi ? "16px" : "26px")};
  }
`;

export const LowestPriceLast30Days = styled.span<ProductTypeProps>`
  display: ${({ $multi }) => ($multi ? "inline" : "block")};
  margin-top: ${({ $multi }) => ($multi ? "0" : "15px")};
  font-size: 13px;
  color: #66676e;

  span {
    color: #d9000c;
  }
`;

export const ProductInfo = styled.div`
  /* margin: 2% 10% 0; */
`;

export const ProductDescription = styled.div`
  font-size: 14px;
  margin-top: 2%;
  color: #5f6067;
  p {
    display: inline;
    &:nth-of-type(2) {
      font-weight: bold;
      color: black;
      cursor: pointer;
    }
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const ButtonAddToCart = styled.button`
  width: 300px;
  height: 40px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12px;
  color: white;
  background-color: black;
  border-style: none;
  cursor: pointer;

  ${media.tablet} {
    height: 50px;
    font-size: 14px;
  }
`;

export const ButtonAddToFavorites = styled.button`
  width: 70px;
  height: 40px;
  color: white;
  background-color: black;
  border-style: none;
  cursor: pointer;

  ${media.tablet} {
    width: 50px;
    height: 50px;
  }
`;

export const HeartIcon = styled(FaHeart)`
  width: 12px;
  height: 12px;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const BoxSelect = styled.div`
  margin-top: 20px;
`;

export const ButtonBox = styled.div`
  margin-left: 5px;
`;

export const PropertySectionTitle = styled.h4`
  font-size: 14px;
  margin: 15px 0;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SelectColor = styled.div<ColorProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  border: ${({ color }) => (color === "#FFFFFF" ? "1px solid black" : "none")};
  margin: 5px;
  cursor: pointer;
`;

export const SelectSize = styled.div<SizeProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 50px;
  height: 30px;
  border: ${({ $selectedSize }) => $selectedSize && "1px solid black"};
  margin: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 3px #0000001c;
`;

export const SelectedSize = styled.div<SizeProps>`
  /* background-color: ${({ $selectedSize }) =>
    $selectedSize ? "blue" : "red"}; */
`;

export const ContainerCart = styled.div<TrolleyProductTypeProps>`
  width: 100%;
  display: ${({ $isDrawer }) => ($isDrawer ? "block" : "flex")};
  padding: ${({ $isDrawer }) => ($isDrawer ? "10px 0" : "20px 35px")};
  border-bottom: 1px solid rgba(84, 82, 82, 0.058);
`;

export const BoxCartPageImg = styled.div`
  width: fit-content;
  margin-right: 20px;
`;
export const ProductWrapper = styled.div<TrolleyProductTypeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ $isDrawer }) => ($isDrawer ? "auto" : "100%")};
  gap: 15px;
  margin-bottom: 20px;

  ${media.mobile} {
    margin-bottom: 0;
  }

  ${media.desktop} {
    gap: unset;
  }
`;

export const PriceBox = styled.div`
  min-width: 110px;
  text-align: center;

  ${media.tablet} {
    min-width: inherit;
  }
`;

export const ProductMainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductInfoCart = styled.div<TrolleyProductTypeProps>`
  display: flex;
  flex-direction: ${({ $isDrawer }) => ($isDrawer ? "column" : "row")};
  flex-wrap: wrap;
  width: ${({ $isDrawer }) => ($isDrawer ? "inherit" : "75%")};
  max-width: 115px;
  justify-content: space-between;
  gap: 3px;
  white-space: nowrap;

  ${media.desktop} {
    max-width: 300px;
  }
`;

export const TableSize = styled.div``;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 35px;
  border-radius: 5px;
`;

export const ModalHeader = styled.h2`
  margin-bottom: 10px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledTable = styled.table`
  tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
  }

  th {
    padding: 5px;
    font-size: 14px;
  }

  td {
    width: 150px;
    text-align: center;
    text-transform: uppercase;
    padding: 10px;
  }
`;

export const ModalSizeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ModalSizeItem = styled.li`
  margin-bottom: 5px;
`;

export const ActionBox = styled.div<TrolleyProductTypeProps>`
  display: flex;
  flex-direction: ${({ $isDrawer }) => ($isDrawer ? "column" : "row")};
  gap: ${({ $isDrawer }) => ($isDrawer ? "10px" : "20px")};
`;

export const ProductImage = styled(Image)`
  object-fit: cover;
  box-shadow: 0px 0px 5px 3px #0000001f;
`;

export const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 14px;

  ${media.mobile} {
    font-size: 16px;
  }
`;
export const ProductQuantity = styled.div`
  font-size: 12px;

  ${media.mobile} {
    font-size: 14px;
  }
`;

export const ProductPrice = styled.p<TrolleyProductTypeProps>`
  font-size: ${({ $isDrawer }) => ($isDrawer ? "15px" : "16px")};
  font-weight: bold;
  color: black;
`;
export const EmptyTrolley = styled.div`
  font-size: 12px;
`;

export const DeleteBox = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const AddToFavoritesBox = styled.div`
  display: flex;
  cursor: pointer;
`;

export const DeleteIcon = styled(FaRegTrashAlt)`
  width: 20px;
  height: 20px;
  color: black;
`;

export const ActionCopy = styled.p`
  margin-left: 10px;
  font-size: 10px;

  ${media.mobile} {
    font-size: 12px;
  }
`;

export const Spacer = styled.div`
  width: 90%;
  margin-bottom: 10px;
  box-shadow: 0 2px 20px -8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(84, 82, 82, 0.058);
`;
