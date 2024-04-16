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

  h3 {
    margin-bottom: 10px;
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

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #dddddd;
    padding: 8px;
    font-size: 14px;

    ${media.mobile} {
      font-size: 16px;
    }
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Price = styled.td`
  text-align: center;
`;

export const PriceTitle = styled.th`
  text-align: center;
`;

export const Table = styled.table`
  margin: 30px 0;
`;
