import React from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import * as S from "./DeliveryOptions.styled";
import Button from "../Button/Button";

const inPostCourier = "Kurier InPost";
const inpostParcel = "Paczkomat InPost";
const dpdCourier = "Kurier DPD";
const orlenPacket = "Orlen Paczka";

const DeliveryOptions = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const selectedOption = watch("deliveryOption");

  const handleOptionChange = (e: { target: { value: any } }) => {
    setValue("deliveryOption", e.target.value);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Box>
        <S.Label>
          <input
            type="radio"
            value="kurierInpost"
            {...register("deliveryOption")}
            onChange={handleOptionChange}
          />
          <p>{inPostCourier}</p>
          {selectedOption === "kurierInpost" && <FaCheckCircle color="green" />}
        </S.Label>
      </S.Box>
      <S.Box>
        <S.Label>
          <input
            type="radio"
            value="paczkomatInpost"
            {...register("deliveryOption")}
            onChange={handleOptionChange}
          />
          <p>{orlenPacket}</p>
          {selectedOption === "paczkomatInpost" && (
            <FaCheckCircle color="green" />
          )}
        </S.Label>
        {selectedOption === "paczkomatInpost" && (
          <>
            <input
              {...register("paczkomatInpostValue", {
                required: "Podaj numer paczkomatu Inpost",
                pattern: {
                  value: /^\S+$/,
                  message: "Podaj poprawny numer paczkomatu Inpost",
                },
              })}
              type="text"
              placeholder="Wpisz numer paczkomatu Inpost"
            />
            {errors?.paczkomatInpostValue && (
              <span>{errors?.paczkomatInpostValue?.message?.toString()}</span>
            )}
          </>
        )}
      </S.Box>
      <S.Box>
        <S.Label>
          <input
            type="radio"
            value="kurierDPD"
            {...register("deliveryOption")}
            onChange={handleOptionChange}
          />
          <p>{dpdCourier}</p>
          {selectedOption === "kurierDPD" && <FaCheckCircle color="green" />}
        </S.Label>
      </S.Box>
      <S.Box>
        <S.Label>
          <input
            type="radio"
            value="orlenPaczka"
            {...register("deliveryOption")}
            onChange={handleOptionChange}
          />
          <p>{orlenPacket}</p>
          {selectedOption === "orlenPaczka" && <FaCheckCircle color="green" />}
        </S.Label>
        {selectedOption === "orlenPaczka" && (
          <>
            <input
              {...register("orlenPaczkaValue", {
                required: "Podaj numer paczkomatu Orlen",
                pattern: {
                  value: /^\S+$/,
                  message: "Podaj poprawny numer paczkomatu Orlen",
                },
              })}
              type="text"
              placeholder="Wpisz numer paczkomatu Orlen"
            />
            {errors?.orlenPaczkaValue && (
              <span>{errors?.orlenPaczkaValue?.message?.toString()}</span>
            )}
          </>
        )}
      </S.Box>
      <Button type="normal">Wybierz opcję dostawy</Button>
    </S.Form>
  );
};

export default DeliveryOptions;
