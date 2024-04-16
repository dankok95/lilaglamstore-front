import Header from "@/app/1_components/Header/Header";
import * as S from "./SuccessPage.styled";
import Footer from "@/app/1_components/Footer/Footer";
import { useTrolleyContext } from "@/app/context/trolley";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SuccessPage = () => {
  const [count, setCount] = useState<number>(5);
  const router = useRouter();
  const { setTrolley } = useTrolleyContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    setTrolley({ items: [], photos: [] });

    setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearInterval(interval);
  }, [router, setTrolley]);

  return (
    <S.Wrapper>
      <S.Back href="/">Wróć do strony głównej</S.Back>
      <S.Title>Sukces!</S.Title>
      <p>Twoja płatność się powiodła!</p>
      <p>Za {count} zostaniesz przekierowany na strone główną.</p>
    </S.Wrapper>
  );
};

export default SuccessPage;
