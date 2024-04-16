import styled from "styled-components";

import { media } from "@/app/utils/media";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input {
    max-width: 250px;
  }
`;

export const Label = styled.label`
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
