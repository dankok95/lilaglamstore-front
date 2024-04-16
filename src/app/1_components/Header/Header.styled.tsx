import styled from "styled-components";

import { media } from "@/app/utils/media";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 10px 30px;
  border-bottom: 1px solid #e0e0e0;

  div {
    display: flex;
    gap: 10px;
  }
  ${media.tablet} {
    padding: 20px 30px;
    flex-direction: row;
  }
`;

export const BottomBar = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 30px;
  div {
    display: flex;
    position: relative;
  }
`;
//probably img in the future
export const Logo = styled.div`
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
  ${media.tablet} {
    margin: 0;
  }
`;
export const HeaderElement = styled.div`
  margin-right: 15%;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;
export const TrolleyIcon = styled(FaShoppingCart)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  color: black;
`;
export const UserPanelIcon = styled(FaUserCircle)`
  width: 20px;
  height: 20px;
  color: black;
  cursor: pointer;
`;

export const TrolleyWrapper = styled.div`
  position: relative;
  display: flex;
`;
export const TrolleyCount = styled.div`
  position: absolute;
  top: -7px;
  right: -3px;
  margin-left: -10px;
  height: 17px;
  width: 17px;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 3px #0000001d;
  background-color: #d9000c;
  cursor: pointer;
  color: white;
  border-radius: 50%;
`;
