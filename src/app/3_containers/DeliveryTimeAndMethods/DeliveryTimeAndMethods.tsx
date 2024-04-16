import Footer from "@/app/1_components/Footer/Footer";
import * as S from "./DeliveryTimeAndMethods.styled";
import Header from "@/app/1_components/Header/Header";

const DeliveryTimeAndMethods = () => {
  return (
    <>
      <Header />
      <S.Container>
        <h1>Czas i Metody Dostawy</h1>
        <h3>Czas dostawy:</h3>
        <p>
          Staramy się jak najszybciej wysyłać zamówienia, abyście mogli cieszyć
          się zakupami w możliwie najkrótszym czasie. Zazwyczaj zamówienia są
          przetwarzane w ciągu 1-2 dni roboczych od momentu złożenia zamówienia.
          Po przetworzeniu zamówienia czas dostawy zależy od wybranej metody
          dostawy oraz lokalizacji dostawy. Szczegółowe informacje na temat
          czasu dostawy znajdziesz podczas składania zamówienia.
        </p>
        <h3>Metody dostawy:</h3>
        <p>
          Oferujemy kilka opcji dostawy, abyście mogli wybrać najbardziej
          dogodną dla siebie metodę wysyłki. Nasze metody dostawy obejmują:
        </p>
        <ul>
          <li>
            <strong>Kurier:</strong> Dostawa za pośrednictwem renomowanych firm
            kurierskich, zapewniająca szybką i bezpieczną dostawę do Twojego
            drzwi.
          </li>
          <li>
            <strong>Paczkomaty:</strong> Dostawa do wybranego paczkomatu,
            umożliwiająca odbiór przesyłki o dowolnej porze, nawet w weekendy.
          </li>
          <li>
            <strong>Odbiór osobisty:</strong> Możliwość odbioru zamówienia
            osobiście w naszym sklepie, co pozwala zaoszczędzić na kosztach
            dostawy i odebrać produkty w dogodnym dla Ciebie terminie.
          </li>
        </ul>
        <S.Table>
          <thead>
            <tr>
              <th>Metoda dostawy</th>
              <S.PriceTitle>Koszt dostawy</S.PriceTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dostawa kurierem InPost za pobraniem</td>
              <S.Price>23 zł</S.Price>
            </tr>
            <tr>
              <td>Dostawa kurierem InPost</td>
              <S.Price>23 zł</S.Price>
            </tr>
            <tr>
              <td>Dostawa paczkomaty InPost</td>
              <S.Price>15 zł</S.Price>
            </tr>
            <tr>
              <td>Dostawa Orlen Paczka</td>
              <S.Price>8 zł</S.Price>
            </tr>
          </tbody>
        </S.Table>
        <p>
          Zalecamy zapoznanie się z pełnymi warunkami dostawy oraz opłatami
          przed złożeniem zamówienia. Jeśli masz dodatkowe pytania dotyczące
          czasu i metod dostawy, skontaktuj się z naszym działem obsługi
          klienta. Jesteśmy tu, aby pomóc!
        </p>
      </S.Container>
      <Footer />
    </>
  );
};

export default DeliveryTimeAndMethods;
