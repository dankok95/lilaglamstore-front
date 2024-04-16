import { useEffect, useState } from "react";
import * as S from "./CheckoutPage.styled";
import Button from "@/app/1_components/Button/Button";
import { useForm } from "react-hook-form";
import { useUserContext } from "@/app/context/user";
import ProductContainer from "@/app/1_components/ProductContainer/ProductContainer";
import { useTrolleyContext } from "@/app/context/trolley";
import { Spacer } from "../CartPage/CartPage.styled";
import Header from "@/app/1_components/Header/Header";
import Footer from "@/app/1_components/Footer/Footer";
import { sendPaymentRequest } from "@/app/api/orderRequests";
import { User } from "@/app/types/user";
import { getUserDataRequest } from "@/app/api/userRequests";

import InpostGeowidgetModal from "@/app/1_components/InpostGeowidgetModal/InpostGeowidgetModal";

const inPostCourier = "Kurier InPost";
const inpostParcel = "Paczkomat InPost";
const dpdCourier = "Kurier DPD";
const orlenPacket = "Orlen Paczka";

export const CheckoutPage = () => {
  const user = useUserContext();
  const { trolley } = useTrolleyContext();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [userData, setUserData] = useState<User>({} as User);

  useEffect(() => {
    const getUserData = async () => {
      if (user) {
        const response = await getUserDataRequest(user._id);
        if (response.success) {
          console.log(response.user);
          setUserData(response.user);
        }
      }
    };
    getUserData();
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm();

  const selectedOption = watch("deliveryOption");

  const inpostParcelValue = watch("inpostParcelValue");

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    if (user && userData) {
      reset({ ...userData, message: "" });
    }
  }, [userData, reset]);

  const onSubmit = async (data: any) => {
    if (user && trolley) {
      const res = await sendPaymentRequest(user._id, trolley.items, data);
      if (res.success) {
        window.location.assign(res.session);
      }
    }
  };

  const chooseParcel = (parcel: string) => {
    reset({ ...watch(), inpostParcelValue: parcel });
  };
  return (
    <>
      <Header />
      <S.Box>
        <S.FormContainer>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Formularz zamówienia</h2>
            <S.Label htmlFor="name">Imię:</S.Label>
            <S.Input
              {...register("name", {
                required: "Imię jest wymagane",
              })}
            />
            {errors.name && <span>{errors.name.message?.toString()}</span>}
            <S.Label htmlFor="surname">Nazwisko:</S.Label>
            <S.Input
              {...register("surname", {
                required: "Nazwisko jest wymagane",
              })}
            />
            {errors.surname && (
              <span>{errors.surname.message?.toString()}</span>
            )}
            <S.Label htmlFor="email">Adres email:</S.Label>
            <S.Input
              {...register("email", {
                required: "Adres email jest wymagany",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Wprowadź poprawny adres email",
                },
              })}
              disabled
            />
            {errors.email && <span>{errors.email.message?.toString()}</span>}
            <S.Label htmlFor="message">Dodatkowe uwagi:</S.Label>
            <S.TextArea {...register("message")} />

            <Spacer />

            <h2>Dostawa</h2>
            <S.Label htmlFor="street">Ulica:</S.Label>
            <S.Input
              {...register("street", {
                required: "Ulica jest wymagana",
              })}
            />
            <S.Label htmlFor="houseNumber">Numer domu:</S.Label>
            <S.Input
              {...register("houseNumber", {
                required: "Numer domu jest wymagany",
              })}
            />
            <S.Label htmlFor="apartmentNumber">Numer lokalu:</S.Label>
            <S.Input {...register("apartmentNumber")} />
            <S.Label htmlFor="zipCode">Kod pocztowy:</S.Label>
            <S.Input
              {...register("zipCode", {
                required: "Kod pocztowy jest wymagany",
                pattern: {
                  value: /^[0-9]{2}-[0-9]{3}$/,
                  message: "Wprowadź kod pocztowy w formacie XX-XXX",
                },
              })}
            />
            {errors.zipCode && (
              <span>{errors.zipCode.message?.toString()}</span>
            )}
            <S.Label htmlFor="phone">Telefon:</S.Label>
            <S.Input
              {...register("phone", {
                required: "Numer telefonu jest wymagany",
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Wprowadź poprawny numer telefonu",
                },
              })}
            />
            {errors.phone && <span>{errors.phone.message?.toString()}</span>}
            <Spacer />
            <S.BoxDelivery>
              <S.LabelDelivery>
                <input
                  onClick={() => setIsModalOpen(true)}
                  type="radio"
                  value="paczkomatInpost"
                  {...register("deliveryOption")}
                />
                <p>{inpostParcel}</p>
              </S.LabelDelivery>
            </S.BoxDelivery>
            {selectedOption === "paczkomatInpost" && isModalOpen && (
              <InpostGeowidgetModal
                chooseParcel={chooseParcel}
                setIsModalOpen={setIsModalOpen}
              />
            )}
            {selectedOption === "paczkomatInpost" && (
              <>
                Twój paczkomat to: {inpostParcelValue}
                <Button onClick={() => setIsModalOpen(true)}>
                  ZMIEŃ PACZKOMAT
                </Button>
              </>
            )}
            <S.BoxDelivery>
              <S.LabelDelivery>
                <input
                  type="radio"
                  value="kurierInpost"
                  {...register("deliveryOption")}
                />
                <p>{inPostCourier}</p>
              </S.LabelDelivery>
            </S.BoxDelivery>
            <S.BoxDelivery>
              <S.LabelDelivery>
                <input
                  type="radio"
                  value="kurierDPD"
                  {...register("deliveryOption")}
                />
                <p>{dpdCourier}</p>
              </S.LabelDelivery>
            </S.BoxDelivery>

            <Button>Zamawiam i płacę</Button>
          </S.Form>
        </S.FormContainer>
        <S.BoxSummary>
          <S.SummaryContainer>
            <h2>Podsumowanie zamówienia</h2>
            {Array.isArray(trolley?.items) &&
              trolley.items.map((item, index) => (
                <ProductContainer
                  key={index}
                  type="cartPage"
                  color={item?.color}
                  quantity={item?.quantity}
                  size={item?.size}
                  mainInfo={item?.product}
                />
              ))}
          </S.SummaryContainer>
        </S.BoxSummary>
      </S.Box>
      <Footer />
    </>
  );
};

export default CheckoutPage;
