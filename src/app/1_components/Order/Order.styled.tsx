import { media } from "@/app/utils/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  max-width: calc(100% - 30px);
  margin: 0 15px;
  padding: 10px;
  box-shadow: 0px 0px 5px 3px #00000030;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: 0px 0px 5px 3px #00000050;
    transform: scale(1.05);
  }

  ${media.tablet} {
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
`;

export const Date = styled.p`
  font-size: 16px;
`;
