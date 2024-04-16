import { media } from "@/app/utils/media";
import styled from "styled-components";

interface isBorshouldDisplayBorderder {
  isBorder?: boolean;
}

export const Container = styled.div`
  overflow: hidden;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1400px;
  margin: 7% auto 10%;
  justify-content: center;
  align-items: center;

  h3 {
    padding: 20px 0;
    font-size: 16px;

    ${media.tablet} {
      flex-direction: row;
      font-size: 24px;
    }
  }

  ${media.tablet} {
    flex-direction: row;
  }
`;

export const TrolleyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 300px;
  width: 100%;
  background-color: white;
  box-shadow: 6px 6px 32px rgba(0, 0, 0, 0.1);
`;

export const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  box-shadow: 6px 6px 32px rgba(0, 0, 0, 0.1);

  ${media.tablet} {
    min-height: 300px;
  }
`;

export const Spacer = styled.div<isBorshouldDisplayBorderder>`
  width: 90%;
  margin-bottom: 10px;
  box-shadow: 0 2px 20px -8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(84, 82, 82, 0.058);
`;

export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 160px;
`;

export const TotalPrice = styled.p`
  padding: 20px 0;
`;
