import { media } from "@/app/utils/media";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding: 40px 15px 0;
  box-shadow: 0 2px 10px 7px rgba(0, 0, 0, 0.1);
  li {
    margin-bottom: 2px;
    list-style-type: none;
    cursor: unset;
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    margin-bottom: 14px;
    font-size: 16px;

    ${media.tablet} {
      margin-bottom: 20px;
      font-size: 18px;
    }
  }
  p,
  a {
    margin-bottom: 0;
    font-size: 14px;

    ${media.tablet} {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vw;
  margin-bottom: 10px;

  ${media.tablet} {
    flex-direction: row;
    max-width: 1485px;
    margin-bottom: 40px;
  }
`;

export const CompanyNameAndLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

export const Spacer = styled.div`
  width: 70%;
  margin: 10px 0;
  box-shadow: 0 2px 20px -8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(84, 82, 82, 0.058);
`;

export const FollowUS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 3px;

  ${media.tablet} {
    justify-content: flex-start;
  }
`;

export const ImgSocialMedia = styled.div`
  background-color: black;
  padding: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Copy = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 14px;
`;
