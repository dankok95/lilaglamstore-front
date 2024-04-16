import { media } from "@/app/utils/media";
import styled from "styled-components";

interface ProductImgProps {
  $type: "mainImg" | "otherImg";
}

export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 60px 25px;
  background-color: white;
  box-shadow: 6px 6px 32px rgba(0, 0, 0, 0.1);
  flex-direction: column-reverse;
  gap: 25px;

  ${media.tablet} {
    flex-direction: row;
    gap: 0;
    padding: 100px 40px;
  }
`;

export const BoxProductImg = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: row;
    ${media.tablet} {
      flex-direction: column;
    }
  }
`;

export const ProductImg = styled.img<ProductImgProps>`
  width: ${({ $type }) => ($type === "mainImg" ? "250px" : "150px")};
  margin: ${({ $type }) => ($type === "mainImg" ? "0 auto" : "0 0 10px 0")};
  object-fit: ${({ $type }) =>
    $type === "mainImg" ? "contain" : "scale-down"};
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.12);
  cursor: ${({ $type }) => ($type === "mainImg" ? "auto" : "pointer")};

  ${media.desktop} {
    max-width: ${({ $type }) => ($type === "mainImg" ? "550px" : "150px")};
    width: ${({ $type }) => ($type === "mainImg" ? "100%" : "150px")};
    height: ${({ $type }) => ($type === "mainImg" ? "auto" : "200px")};
    margin: ${({ $type }) => ($type === "mainImg" ? "0 20px" : "0 0 10px 0")};
  }
`;
