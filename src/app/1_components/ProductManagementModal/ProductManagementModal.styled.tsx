import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbCameraPlus } from "react-icons/tb";
import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: #0000009d;
`;

export const Modal = styled.form`
  padding: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 0px 5px 3px #00000039;
  background-color: #ffffff;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  outline: none;
`;
export const Select = styled.select`
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  &:focus {
    border: 1px solid #000000ca;
  }
`;
export const PlusIcon = styled(FaPlus)`
  width: 20px;
  height: 20px;
  color: black;
  cursor: pointer;

  &:hover {
    color: #000000ca;
  }
`;
export const Variant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 3px #0000003d;
  background-color: black;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5px;
`;

export const Dimensions = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 0;
  background-color: #fff;
  color: black;
`;

export const DimensionsTitle = styled.p`
  font-size: 12px;
  margin-left: 20px;
  width: 200px;
`;

export const InputDimensions = styled(Input)`
  background-color: white;
  padding: 0;
  color: black;
  border: 0;
`;

export const VariantSelect = styled(Select)`
  width: 50px;
  background-color: black;
  border: 0;
  color: white;
`;

export const VariantInput = styled(Input)`
  width: 100px;
  background-color: black;
  padding: 0;
  color: white;
  border: 0;
`;
export const MinusIcon = styled(FaMinus)`
  width: 13px;
  padding: 0;
  height: 13px;
  cursor: pointer;
  color: white;
`;

export const ImagePreviewWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    position: absolute;
  }
`;

export const ImagePreview = styled(Image)`
  object-fit: cover;
  box-shadow: 0px 0px 5px 3px #0000003d;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CloseIcon = styled(IoClose)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: white;
`;
export const ImagesWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const ImageLabel = styled.label`
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 5px 3px #0000003d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s ease;
  &:hover {
    background-color: #0000000d;
  }
`;

export const CameraIcon = styled(TbCameraPlus)``;
