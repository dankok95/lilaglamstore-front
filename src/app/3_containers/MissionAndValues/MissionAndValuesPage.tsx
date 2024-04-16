import Footer from "@/app/1_components/Footer/Footer";
import * as S from "./MissionAndValuesPage.styled";
import Header from "@/app/1_components/Header/Header";

const MissionAndValuesPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <h1>Nasza Misja i Wartości</h1>
        <S.Box>
          <p>
            Jesteśmy tutaj po to, aby sprawić, że każda mała dziewczynka poczuje
            się wyjątkowa i pewna siebie w naszych ubraniach. Naszą misją jest
            dostarczanie najwyższej jakości odzieży, która nie tylko wygląda
            pięknie, ale także zapewnia komfort i radość z noszenia.
          </p>
        </S.Box>
        <br />
        <p>
          W naszym sklepie kładziemy ogromny nacisk na trzy główne wartości:
        </p>
        <S.Box>
          <strong>Jakość: </strong>
          <p>
            Wierzymy, że każde dziecko zasługuje na najlepsze. Dlatego dbamy o
            każdy detal naszych produktów, wykorzystując wysokiej jakości
            materiały i starannie dobierając projekty.
          </p>
        </S.Box>
        <S.Box>
          <strong>Kreatywność: </strong>
          <p>
            Inspirujemy dzieci do wyrażania swojej indywidualności poprzez modę.
            Nasze ubrania są pełne kolorów, wzorów i zabawnych detap, które
            pobudzają wyobraźnię i zachęcają do eksperymentowania z stylem.
          </p>
        </S.Box>
        <S.Box>
          <strong>Empatia: </strong>
          <p>
            Rozumiemy, jak ważne jest dla dzieci i ich rodziców poczucie
            bezpieczeństwa i wsparcia. Dlatego staramy się tworzyć środowisko
            zakupowe, które jest przyjazne, wspierające i zawsze gotowe
            odpowiedzieć na potrzeby naszych kpentów.
          </p>
        </S.Box>
        <p>
          Dzięki naszej misji i wartościom dążymy do tego, aby każda
          dziewczynka, która nosi nasze ubrania, czuła się pewna siebie,
          szczęśpwa i gotowa podbić świat!
        </p>
      </S.Container>
      <Footer />
    </>
  );
};

export default MissionAndValuesPage;
