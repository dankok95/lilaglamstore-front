import { media } from "@/app/utils/media";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const Slides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 20px;
`;

export const Buttons = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: space-between;
`;
export const ButtonsVertical = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

export const Slide = styled.div`
  width: 100%;
  margin-right: 20px;
  margin-top: 10%;

  ${media.tablet} {
    margin-top: 3%;
  }
`;

export const SlideGallery = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Box = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  ${media.tablet} {
    display: block;
  }
`;

export const PrevButton = styled(FaArrowLeft)`
  width: 20px;
  height: 20px;
  color: black;
  margin-right: 10px;
  cursor: pointer;
`;

export const NextButton = styled(FaArrowRight)`
  width: 20px;
  height: 20px;
  color: black;
  cursor: pointer;
`;

export const UpButton = styled(FaArrowUp)`
  width: 20px;
  height: 20px;
  color: black;
  margin-right: 10px;
  cursor: pointer;
`;

export const DownButton = styled(FaArrowDown)`
  width: 20px;
  height: 20px;
  color: black;
  margin-right: 10px;
  cursor: pointer;
`;
