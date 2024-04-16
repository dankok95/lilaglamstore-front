import * as S from "./ReturnsandComplaintsPage.styled";

import Button from "../../1_components/Button/Button";
import Header from "@/app/1_components/Header/Header";
import Footer from "@/app/1_components/Footer/Footer";

const ReturnsAndComplaintsPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <div>
          <h1>Zwroty i Reklamacje</h1>
          <p>
            Jesteśmy zobowiązani do zapewnienia Państwu satysfakcji z zakupów w
            naszym sklepie internetowym. Zgodnie z obowiązującym polskim prawem,
            klientom przysługuje prawo do zwrotu zakupionych towarów oraz
            możliwość zgłaszania reklamacji w przypadku wad produktów. Poniżej
            przedstawiamy nasze zasady dotyczące zwrotów i reklamacji:
          </p>

          <h4>Zwroty:</h4>
          <ul>
            <li>
              <strong>Prawo do odstąpienia od umowy:</strong> Zgodnie z polskim
              prawem konsument ma prawo odstąpić od umowy zawartej na odległość
              (np. zakupu w sklepie internetowym) bez podawania przyczyny, w
              terminie 14 dni od otrzymania towaru. Aby skorzystać z tego prawa,
              należy poinformować nas o decyzji o odstąpieniu od umowy za pomocą
              jednoznacznego oświadczenia (na przykład poprzez e-mail). Towar
              należy zwrócić w stanie nienaruszonym.
            </li>
            <li>
              <strong>Zwrot kosztów:</strong> Po otrzymaniu zwróconego towaru
              zgodnie z powyższymi wymaganiami, zwrócimy Państwu pełną kwotę
              zapłaconą za produkty, w tym koszt standardowej dostawy. Koszty
              zwrotu ponosi konsument.
            </li>
          </ul>
          <p>
            Jeśli preferujesz składanie wniosków o zwrot za pośrednictwem
            e-maila, prosimy o przesłanie wypełnionego formularza na adres{" "}
            <a href="mailto:lilaglamstore@gmail.com">lilaglamstore@gmail.com</a>{" "}
            Alternatywnie, możesz dołączyć wypełniony formularz do przesyłki
            zwrotnej.
          </p>
          <Button>Pobierz wniosek o zwrot</Button>
        </div>

        <h4>Reklamacje:</h4>
        <ul>
          <li>
            <strong>Rękojmia za wady fizyczne i prawne:</strong> Zgodnie z
            polskim prawem konsument ma prawo do składania reklamacji w
            przypadku stwierdzenia wad fizycznych lub prawnych towaru.
            Reklamację należy zgłosić w terminie 2 lat od daty dostarczenia
            produktu. W przypadku stwierdzenia wady, klient może żądać naprawy
            produktu, jego wymiany na nowy, obniżenia ceny lub odstąpienia od
            umowy.
          </li>
        </ul>
        <p>
          Jeśli napotkasz jakiekolwiek problemy z naszymi produktami i
          chciałbyś/-abyś złożyć reklamację, jesteśmy tutaj, aby Ci pomóc.
          Preferujesz składanie reklamacji za pośrednictwem e-maila? Prosimy o
          przesłanie wypełnionego formularza reklamacyjnego na adres{" "}
          <a href="mailto:lilaglamstore@gmail.com">lilaglamstore@gmail.com</a> .
          Alternatywnie, jeśli wolisz, możesz dołączyć wypełniony formularz
          reklamacyjny do przesyłki zwrotnej. Dbamy o satysfakcję naszych
          klientów i dokładamy wszelkich starań, aby rozwiązać wszelkie problemy
          jak najszybciej i jak najbardziej sprawnie. Dziękujemy za zaufanie i
          wybór naszego sklepu internetowego.
        </p>

        <p>
          Mamy nadzieję, że niniejsze informacje wyjaśniają nasze procedury
          dotyczące zwrotów i reklamacji. Jeśli mają Państwo dodatkowe pytania
          lub wątpliwości, zachęcamy do kontaktu z naszym działem obsługi
          klienta.
        </p>
        <Button>Pobierz wniosek reklamacyjny</Button>
      </S.Container>
      <Footer />
    </>
  );
};

export default ReturnsAndComplaintsPage;
