import { media } from "@/app/utils/media";
import styled from "styled-components";
import Image from "next/image";

interface ButtonProps {
  $active?: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
`;

export const ContainerInputs = styled.div`
  position: absolute;
  left: 50%;
  top: calc(50% - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 280px;
  width: 100vw;
  height: 300px;
  transform: translate(-50%, -50%);

  ${media.mobileSmall} {
    max-width: 360px;
  }

  ${media.mobile} {
    max-width: 480px;
  }
`;

export const ContainerBackground = styled(Container)`
  display: none;
  position: relative;
  ${media.tabletLarge} {
    z-index: 1;

    display: flex;
    align-items: center;
  }
`;

export const BackgroundImage = styled(Image)`
  width: 50vw;
  height: 100vh;
  opacity: 0.9;
  object-fit: cover;
  z-index: 0;
  top: 0;
  left: 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333333;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666666;
`;

export const BoxButton = styled.div`
  display: flex;
  max-width: 400px;
  flex-direction: row;
  width: 100%;
`;

export const BoxText = styled.div`
  position: absolute;
  z-index: 1;
  text-align: center;
  h1 {
    margin: 10px 0 0 0;
    font-size: 28px;
    font-family: ui-monospace;
    color: white;
  }
`;

export const TextCaption = styled.p`
  margin: 10px 0 0 0;
  font-size: 18px;
  font-family: ui-monospace;
  color: white;
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 15px 0 15px 0;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: white;
  border-top: 1px;
  border-left: 0;
  border-right: 0;
  font-weight: 400;
  text-transform: uppercase;
  color: #222222;
  border-bottom: 4px solid ${({ $active }) => ($active ? "#c176a0" : "white")};
`;

export const ButtonSubmit = styled.button`
  max-width: 400px;
  width: 100%;
  margin: 12px 0;
  padding: 15px 16px;
  font-size: 1rem;
  color: white;
  background: linear-gradient(to right, #c176a0, #c176a0ac);
  border-color: transparent;
  transition: background-color 0.8s ease, transform 0.3s ease 0.2s,
    opacity 0.3s ease;
  border-width: 0;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonForget = styled.button`
  max-width: 400px;
  width: 100%;
  margin-bottom: 24px;
  padding: 15px 16px;
  font-size: 1rem;
  color: #222222;
  background-color: white;
  border-color: transparent;
  transition: background-color 0.3s ease, transform 0.3s ease 0.2s,
    opacity 0.3s ease;
  border-width: 0;
  cursor: pointer;
  &:hover {
    background: #e5e2e2;
    transition-delay: 0.3s;
    box-shadow: 0.2px 1px 3px #e5e2e2;
    transition: box-shadow 0.3s;
  }
`;

export const Column = styled.div`
  position: absolute;
  top: 65px;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
  width: 100%;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  max-width: 480px;
  width: 100%;
`;

export const BoxInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  max-width: 400px;
  width: 100%;
  padding: 20px 16px;
  font-size: 1rem;
  border: 1px solid #d8d3d9;
  transition: border-color 0.3s ease;
  outline: 0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

  &:focus {
    box-shadow: 0 0 5px #0000007f;
  }
`;

export const PasswordToggle = styled.div`
  position: absolute;
  top: 55%;
  right: 14%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const TextAlertInput = styled.p`
  max-width: 400px;
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
  color: #b83d3d;
  text-align: left;
`;

export const TextInput = styled.p`
  max-width: 400px;
  width: 100%;
  margin: 12px 0;
  font-size: 12px;
  color: #211a23;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  width: 100vw;

  ${media.mobileSmall} {
    max-width: 360px;
  }

  ${media.mobile} {
    max-width: 480px;
  }
`;
