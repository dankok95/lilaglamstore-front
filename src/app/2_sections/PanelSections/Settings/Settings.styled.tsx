import { media } from "@/app/utils/media";
import styled, { keyframes } from "styled-components";

interface ColorProps {
  $isError?: boolean;
}

export const Wrapper = styled.section`
  width: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;

export const Header = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  gap: 10px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;

  /* div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    ${media.tablet} {
      flex-direction: row;
    }
  } */
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: inherit;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Title = styled.p<ColorProps>`
  font-size: 12px;
  margin-bottom: 1px;
  animation: ${fadeIn} 0.8s ease-in-out;
  color: ${({ $isError }) => ($isError ? "#b83d3d;" : "black")};
`;
