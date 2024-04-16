import Header from "@/app/1_components/Header/Header";
import * as S from "./OurStoryPage.styled";
import Footer from "@/app/1_components/Footer/Footer";

const OurStroy = () => {
  return (
    <>
      <Header />
      <S.Container>
        <h1>Nasza Historia</h1>
        <p>
          Od chwili, gdy pierwszy raz otworzyliśmy naszą witrynę internetową,
          nasza podróż była pełna pasji, marzeń i niesamowitych przygód modowych
          dla małych księżniczek. Pozwól nam opowiedzieć Ci trochę o naszych
          początkach i tym, co sprawia, że jesteśmy dumni z tego, co
          osiągnęliśmy.
        </p>
        <p>
          Nasza historia sięga głęboko - zrodzona z miłości do mody i
          poświęcenia dla najmłodszych. Kiedy zakładaliśmy nasz sklep online,
          marzyliśmy o miejscu, które oferowałoby nie tylko wyjątkowe ubrania,
          ale także magiczne doświadczenie zakupowe dla naszych małych klientek
          i ich rodziców, bez wychodzenia z domu.
        </p>
        <p>
          Dziękujemy, że jesteś częścią naszej historii. Zachęcamy Cię do
          odkrywania naszych kolekcji, doświadczania magii mody dla dzieci i
          tworzenia wspólnie z nami kolejnych niezapomnianych chwil, zaledwie
          kilka kliknięć od Ciebie.
        </p>
        <div>
          <p>Z miłością,</p>
          <p>Zespół LilaGlam Store.</p>
        </div>
      </S.Container>
      <Footer />
    </>
  );
};

export default OurStroy;
