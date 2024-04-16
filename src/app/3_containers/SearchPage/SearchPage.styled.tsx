import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "@/app/utils/media";
import { MdClose, MdFilterList } from "react-icons/md";
import { BsFilterLeft } from "react-icons/bs";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  div {
    display: flex;
  }
`;

export const Filters = styled.div<{ $opened: boolean }>`
  gap: 10px;
  position: fixed;
  display: ${({ $opened }) => ($opened ? "flex" : "none !important")};
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  flex-direction: column;
  background-color: white;
  z-index: 3;
  align-items: center;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
  justify-content: space-between;
  ${media.mobile} {
    display: flex !important;
    width: 300px;

    height: calc(100vh - 107px);
    position: relative;
  }
`;
export const Results = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  ${media.mobile} {
    width: calc(100vw - 300px);
  }
`;
export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Input = styled.input`
  padding: 10px;
  width: 90%;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;
export const FilterCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 90%;
  margin-bottom: 10px;
`;
export const CheckboxesTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  margin-right: 15px;
`;
export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  top: -5px;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #ffffff;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  transition: 0.2s ease;
  ${CheckboxContainer}:hover & {
    background-color: #e9e9e9;
  }

  ${CheckboxContainer} input:checked:hover ~ & {
    background-color: #e9e9e9;
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
  ${CheckboxContainer} input:checked ~ & {
    &:after {
      display: block;
    }
  }
  &:after {
    left: 7px;
    top: 4px;
    width: 4px;
    height: 9px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const CloseIcon = styled(MdClose)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: sticky;
  float: left;
  color: black;
  ${media.mobile} {
    display: none;
  }
`;
export const TopBar = styled.div`
  width: 100%;
`;
export const FilterIcon = styled(BsFilterLeft)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 2px;
  box-shadow: 0px 0px 5px 3px #00000029;
  color: black;
  ${media.mobile} {
    display: none;
  }
`;
