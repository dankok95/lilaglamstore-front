import { media } from "@/app/utils/media";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;

  padding: 20px;
  ${media.tablet} {
    overflow-y: scroll;
  }
`;
export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Title = styled.div`
  font-size: 20px;
  margin: 30px 0;
`;
