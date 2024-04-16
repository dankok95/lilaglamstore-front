import { media } from "@/app/utils/media";
import styled, { keyframes } from "styled-components";

interface ColorProps {
  $isError?: boolean;
}

const inputMaxWidth = "400px";

export const Box = styled.div`
  max-width: 1385px;
  margin: 70px auto 0;
  position: relative;
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;

  ${media.tablet} {
    flex-direction: row;
    padding-bottom: 17%;
  }
`;

export const BoxDelivery = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input {
    max-width: 250px;
  }
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
  max-height: 1060px;
  min-height: 430px;
  padding: 20px 35px;
  box-shadow: 6px 6px 32px rgba(0, 0, 0, 0.1);

  input {
    max-width: ${inputMaxWidth};
  }

  ${media.tablet} {
    width: 85%;
  }
`;

export const BoxSummary = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SummaryContainer = styled.div`
  width: 100%;
  min-height: 430px;
  padding: 20px 10px;
  box-shadow: 6px 6px 32px rgba(0, 0, 0, 0.1);
  padding: 0 35px;

  h2 {
    padding: 15px 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 10px;
  margin-top: 20px;

  span {
    margin: 0;
    font-size: 12px;
    color: #d9000c;
  }
  p {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;

  p {
    font-size: 10px;
  }
`;

export const LabelDelivery = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;

  p {
    margin: 0 5px;
  }

  span {
    color: #d9000c;
  }
`;

export const Input = styled.input`
  padding: 0;
  border-color: #c1baba;
  border-width: 0;
  border-bottom-width: 1px;
  border-radius: 0;
`;

export const TextArea = styled.textarea`
  max-width: ${inputMaxWidth};
  border-color: #c1baba;
  border-width: 0;
  border-bottom-width: 1px;
  border-radius: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

export const TextAlertInput = styled.p`
  max-width: 400px;
  width: 100%;
  margin-top: -5px;
  font-size: 12px;
  color: #b83d3d;
  text-align: left;
`;
