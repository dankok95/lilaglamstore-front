import Header from "@/app/1_components/Header/Header";
import * as S from "./TrackingPage.styled";
import Footer from "@/app/1_components/Footer/Footer";

const TrackingPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <h1>Śledź przesyłkę</h1>
        <p>
          Gdy Twoje zamówienie zostanie skompletowane i przekazane kurierowi,
          Twoja paczka wyrusza w podróż do Twojego domu. W momencie, gdy
          opuszcza nasz magazyn, aktywuje się funkcja śledzenia przesyłki.
          Otrzymasz e-mail z linkiem, który umożliwi Ci monitorowanie aktualnej
          lokalizacji Twojego paczki.
        </p>
      </S.Container>
      <Footer />
    </>
  );
};

export default TrackingPage;
