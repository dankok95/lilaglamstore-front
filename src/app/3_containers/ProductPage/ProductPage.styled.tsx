import styled from "styled-components";
import { media } from "@/app/utils/media";

export const Container = styled.div`
  overflow: hidden;
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
