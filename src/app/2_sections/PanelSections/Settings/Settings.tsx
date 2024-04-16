import { useForm } from "react-hook-form";
import * as S from "./Settings.styled";
import Button from "@/app/1_components/Button/Button";
import { useUserContext } from "@/app/context/user";
import { getUserDataRequest, updateUserRequest } from "@/app/api/userRequests";
import Router from "next/router";
import { useEffect, useState } from "react";
import { User } from "@/app/types/user";

const Settings = () => {
  const user = useUserContext();
  const [userData, setUserData] = useState<User>({} as User);

  useEffect(() => {
    const getUserData = async () => {
      if (user) {
        const response = await getUserDataRequest(user._id);
        if (response.success) {
          setUserData(response.user);
        }
      }
    };
    getUserData();
  }, [user]);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { touchedFields },
  } = useForm({ defaultValues: userData });
  const onSubmit = async (data: Object) => {
    const response = await updateUserRequest(data);
    if (response.success) {
      Router.reload();
    }
  };
  useEffect(() => {
    reset(userData);
  }, [userData, reset]);

  const inputName = watch("name");
  const inputSurname = watch("surname");
  const inputCountry = watch("country");
  const inputCity = watch("city");
  const inputZipCode = watch("zipCode");
  const inputStreet = watch("street");
  const inputApartmentNumber = watch("apartmentNumber");
  const inputPhone = watch("phone");
  const inputEmail = watch("email");

  return (
    <S.Wrapper>
      <S.Header>Ustawienia konta</S.Header>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Row>
          <S.Box>
            {inputName?.trim() !== "" && <S.Title>Imię</S.Title>}
            <S.Input
              {...register("name", {
                required: "Imię jest wymagane",
              })}
              placeholder="Imię"
            />
            {errors.name && (
              <S.Title $isError={true}>{errors.name.message}</S.Title>
            )}
          </S.Box>
          <S.Box>
            {inputSurname?.trim() !== "" && <S.Title>Nazwisko</S.Title>}
            <S.Input
              {...register("surname", {
                required: "Nazwisko jest wymagane",
              })}
              placeholder="Nazwisko"
            />
            {errors.surname && (
              <S.Title $isError={true}>{errors.surname.message}</S.Title>
            )}
          </S.Box>
          <S.Box>
            {inputEmail?.trim() !== "" && <S.Title>Adres email</S.Title>}
            <S.Input
              {...register("email", {
                required: "Adres email jest wymagany",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Wprowadź poprawny adres email",
                },
              })}
              placeholder="Adres email"
            />
            {errors.email && (
              <S.Title $isError={true}>{errors.email.message}</S.Title>
            )}
          </S.Box>
        </S.Row>
        <S.Box>
          {inputCountry?.trim() !== "" && <S.Title>Kraj</S.Title>}
          <S.Input
            {...register("country", {
              required: "Kraj jest wymagany",
            })}
            placeholder="Kraj"
          />
          {errors.country && (
            <S.Title $isError={true}>{errors.country.message}</S.Title>
          )}
        </S.Box>
        <S.Box>
          {inputCity?.trim() !== "" && <S.Title>Miasto</S.Title>}
          <S.Input
            {...register("city", {
              required: "Miasto jest wymagane",
            })}
            placeholder="Miasto"
          />
          {errors.city && (
            <S.Title $isError={true}>{errors.city.message}</S.Title>
          )}
        </S.Box>
        <S.Box>
          {inputZipCode?.trim() !== "" && <S.Title>Kod pocztowy</S.Title>}
          <S.Input
            {...register("zipCode", {
              required: "Kod pocztowy jest wymagany",
            })}
            placeholder="Kod pocztowy"
          />
          {errors.zipCode && (
            <S.Title $isError={true}>{errors.zipCode.message}</S.Title>
          )}
        </S.Box>
        <S.Box>
          {inputStreet?.trim() !== "" && <S.Title>Ulica</S.Title>}
          <S.Input
            {...register("street", {
              required: "Ulica jest wymagana",
            })}
            placeholder="Ulica"
          />
          {errors.street && (
            <S.Title $isError={true}>{errors.street.message}</S.Title>
          )}
        </S.Box>
        <S.Box>
          {inputApartmentNumber?.trim() !== "" && <S.Title>Nr lokalu</S.Title>}
          <S.Input
            {...register("apartmentNumber", {})}
            placeholder="Nr lokalu"
          />
        </S.Box>
        <S.Box>
          {inputPhone?.trim() !== "" && <S.Title>Numer telefonu</S.Title>}
          <S.Input
            {...register("phone", {
              required: "Numer telefonu jest wymagany",
            })}
            placeholder="Numer telefonu"
          />
          {errors.phone && (
            <S.Title $isError={true}>{errors.phone.message}</S.Title>
          )}
        </S.Box>
        <Button>Zatwierdź</Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default Settings;
