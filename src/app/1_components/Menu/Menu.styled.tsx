import styled from "styled-components";
import { LuClipboardList, LuUser } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { media } from "@/app/utils/media";

export const Wrapper = styled.div<{ $visible?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100vh;
  z-index: 5;
  background-color: white;
  width: 100vw;
  box-shadow: 0px 0px 3px 5px #00000021;
  ${media.tablet} {
    display: flex;
    width: 300px;
    position: relative;
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 40px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Menu = styled.div`
  display: flex;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 20px;
  flex-direction: column;
  width: 100%;
`;

export const MenuElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const MenuItem = styled.div`
  font-size: 16px;
  margin-left: 10px;
  padding: 10px;
  border-left: 1px solid #cacaca;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #686868;
  }
`;
export const OrdersIcon = styled(LuClipboardList)`
  width: 20px;
  height: 20px;
  color: black;
  margin-right: 10px;
`;
export const HomeButton = styled.div`
  margin: 10px 0;
  width: 100%;
`;
export const HomeIcon = styled(AiOutlineHome)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: black;
`;
export const UserIcon = styled(LuUser)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: black;
`;
export const AdminIcon = styled(MdOutlineAdminPanelSettings)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: black;
`;
export const MenuIcon = styled(FaList)`
  width: 20px;
  height: 20px;
  margin: 15px;
  color: black;
  cursor: pointer;
  ${media.tablet} {
    display: none;
  }
`;
export const CloseIcon = styled(IoClose)`
  width: 25px;
  height: 25px;
  color: black;
  cursor: pointer;
  margin-left: auto;
  ${media.tablet} {
    display: none;
  }
`;
