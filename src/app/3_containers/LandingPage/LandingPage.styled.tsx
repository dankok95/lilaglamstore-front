import { media } from "@/app/utils/media";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const DiscoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 60px);
  border-radius: 2px;
  height: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 30px;
  background: url("/2.jpg");
  background-size: cover;
  background-position: center;
  backdrop-filter: brightness(2);
  background-repeat: no-repeat;
`;

export const DiscoverTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 18px;
  ${media.mobile} {
    font-size: 30px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 85%;
  ${media.mobile} {
    width: 65%;
  }
  ${media.desktop} {
    width: 45%;
  }
`;

export const SearchIcon = styled(FaSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  color: gray;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
export const SubmitWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

export const SubmitIcon = styled(FaArrowRight)`
  width: 15px;
  height: 15px;

  color: white;
`;

export const SearchBar = styled.input`
  padding: 12px 50px;
  font-family: inherit;
  font-size: 16px;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  outline: none;
`;

export const NewArrivalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 30px;
  width: calc(100vw - 60px);
`;

export const NewArrivalsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
`;

export const NewArrivalsTitle = styled.h2`
  font-weight: 700;
`;
export const ProductsWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 1;
  margin-top: 3%;

  ${media.tablet} {
    min-height: 500px;
  }
`;
