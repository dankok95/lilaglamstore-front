import styled from "styled-components";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { media } from "@/app/utils/media";

interface TrolleyProductTypeProps {
  $isDrawer?: boolean;
}

export const Container = styled.div<TrolleyProductTypeProps>`
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

export const ProductInfo = styled.div<TrolleyProductTypeProps>`
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
