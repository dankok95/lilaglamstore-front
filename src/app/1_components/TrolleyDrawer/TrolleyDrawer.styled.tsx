import styled from "styled-components";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

import { media } from "@/app/utils/media";

export const Wrapper = styled(motion.div)`
  position: fixed;
  background-color: #00000057;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const Drawer = styled(motion.div)`
  position: fixed;
  background-color: white;
  z-index: 6;
  height: 100vh;
  padding: 20px;
  top: 0;
  width: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${media.mobile} {
    width: 400px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const CloseIcon = styled(MdClose)`
  width: 25px;
  height: 25px;
  color: black;
  cursor: pointer;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Spacer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  box-shadow: 0 2px 20px -8px rgba(0, 0, 0, 1);
  border: 1px solid rgb(34 32 32 / 14%);
`;

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e4e4e4;
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    justify-content: space-between;
  }
`;

export const ProductImage = styled(Image)`
  object-fit: cover;
  box-shadow: 0px 0px 5px 3px #0000001f;
`;

export const ProductTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const ProductQuantity = styled.div`
  font-size: 14px;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
`;

export const EmptyTrolley = styled.div`
  font-size: 12px;
`;

export const DeleteIcon = styled(FaRegTrashAlt)`
  width: 20px;
  height: 20px;
  color: black;
  cursor: pointer;
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 15px 20px;
  width: 100%;
  margin: 0 -20px;
  background-color: #000000;
`;
