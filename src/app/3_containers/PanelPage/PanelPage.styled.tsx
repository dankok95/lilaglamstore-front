import styled from "styled-components";

import { media } from "@/app/utils/media";

export const Wrapper = styled.div`
  ${media.tablet} {
    display: flex;
  }
`;
export const Panel = styled.div`
  display: flex;

  ${media.tablet} {
    height: 100vh;
    width: calc(100vw - 300px);
  }
`;
