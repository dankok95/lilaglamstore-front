import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";

import { loginUserRequest, registerUserRequest } from "../../api/userRequests";

import * as S from "./LoginRegister.styled";
import { useCookies } from "react-cookie";

const emailPlaceholder = "Adres e-mail";
const passwordPlaceholder = "Hasło";
const namePlaceholder = "Imię";
const signIn = "Załóż konto";
const logIn = "Zaloguj się";
const forgotPassword = "Nie pamiętam hasła";
const alertPasswordSignIn =
  "Hasło musi zawierać co najmniej jedną dużą literę, jeden znak specjalny i składać się z co najmniej 6 znaków.";
const alertEmail = "Nieprawidłowy adres e-mail";
const alertRequired = "To pole jest wymagane";
const greetingMessage = "Hej, jak masz na imię?";
const welcomeMessage = "Witaj w LilaGlam Store.";
const findPerfectOutfit =
  "Znajdź idealną kreację dla Twojej małej księżniczki!";

type Props = {
  type: "login" | "register";
};

const LoginRegister = ({ type }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const router = useRouter();

  const [cookie, setCookie] = useCookies(["refreshToken"]);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data: any) => {
    if (type === "register") {
      const test = await registerUserRequest(data);
    } else {
      const response = await loginUserRequest(data);
      if (response.token) {
        const token = response.token;
        setCookie("refreshToken", token, { path: "/" });
        router.push("/");
      }
    }
  };

  const buttonsData = useMemo(
    () => [
      { label: logIn, type: "login" },
      { label: signIn, type: "register" },
    ],
    [logIn, signIn]
  );

  const nameBtnSubmit = type === "login" ? logIn : signIn;

  const renderButtons = () => {
    return buttonsData.map((button) => {
      return (
        <S.Button
          key={button.type}
          $active={type === button.type}
          onClick={() => router.push(`/${button.type}`)}
        >
          {button.label}
        </S.Button>
      );
    });
  };

  return (
    <S.MainContainer>
      <S.ContainerBackground>
        <S.BackgroundImage
          alt=""
          src="/1.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <S.BoxText>
          <h1>{welcomeMessage}</h1>
          <S.TextCaption>{findPerfectOutfit}</S.TextCaption>
        </S.BoxText>
      </S.ContainerBackground>
      <S.Container>
        <S.ContainerInputs>
          <S.BoxButton>{renderButtons()}</S.BoxButton>
          <S.Column>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              {type === "register" && (
                <S.InputLabel>
                  <S.BoxInput>
                    <S.Input
                      {...register("name", {
                        required: alertRequired,
                      })}
                      type="text"
                      placeholder={namePlaceholder}
                      onBlur={() => trigger("name")}
                    />
                    <S.TextInput>{greetingMessage}</S.TextInput>
                  </S.BoxInput>
                </S.InputLabel>
              )}
              <S.InputLabel>
                <S.BoxInput>
                  <S.Input
                    {...register("email", {
                      required: alertRequired,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: alertEmail,
                      },
                    })}
                    type="text"
                    placeholder={emailPlaceholder}
                    onBlur={() => trigger("email")}
                  />
                </S.BoxInput>
                {errors.email && (
                  <S.TextAlertInput>
                    {errors.email.message?.toString()}
                  </S.TextAlertInput>
                )}
              </S.InputLabel>
              <S.InputLabel>
                <S.BoxInput>
                  <S.Input
                    {...register("password", {
                      required: alertRequired,
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
                        message: type === "register" ? alertPasswordSignIn : "",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder={passwordPlaceholder}
                    onBlur={() => trigger("password")}
                  />

                  <S.PasswordToggle onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </S.PasswordToggle>
                </S.BoxInput>
                {!!errors.password?.message && (
                  <S.TextAlertInput>
                    {errors.password.message?.toString()}
                  </S.TextAlertInput>
                )}
              </S.InputLabel>
              <S.ButtonSubmit type="submit">{nameBtnSubmit}</S.ButtonSubmit>
            </S.Form>
            <S.ButtonForget>{forgotPassword}</S.ButtonForget>
          </S.Column>
        </S.ContainerInputs>
      </S.Container>
    </S.MainContainer>
  );
};

export default LoginRegister;
