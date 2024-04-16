import { media } from "@/app/utils/media";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 7% auto 10%;
  padding: 0 10px;
  text-align: center;

  ${media.tablet} {
    text-align: left;
  }

  div {
    margin-bottom: 40px;
  }

  h1 {
    margin-bottom: 25px;
    color: #333;
    font-size: 26px;
    text-align: center;

    ${media.tablet} {
      margin-bottom: 40px;
      font-size: 32px;
    }
  }

  h4 {
    margin-bottom: 5px;
  }

  p,
  ul {
    margin-bottom: 15px;
    color: #666;
    line-height: 1.6;
    font-size: 14px;
    list-style-position: inside;

    ${media.mobile} {
      font-size: 16px;
    }
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: black;
  }
`;
