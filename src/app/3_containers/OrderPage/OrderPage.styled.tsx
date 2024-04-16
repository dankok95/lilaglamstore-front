import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin: 20px 0;
  font-size: 25px;
`;
export const ProductsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  width: fit-content;
`;

export const ConsumerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
`;
