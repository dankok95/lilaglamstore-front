import Footer from "@/app/1_components/Footer/Footer";
import * as S from "./PaymentMethodsPage.styled";
import Header from "@/app/1_components/Header/Header";

const PaymentMethodsPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <div></div>
        <h1>Metody Płatności</h1>
        <p>
          W naszym sklepie internetowym stawiamy na wygodę i elastyczność dla
          naszych klientów, dlatego oferujemy różnorodne metody płatności,
          abyście mogli dokonać zakupów bez względu na swoje preferencje. Oto
          kilka sposobów, dzięki którym możecie dokonać płatności za wasze
          zamówienia:
        </p>
        <ul>
          <li>
            <strong>Przelewy24:</strong> Dzięki naszej integracji z
            Przelewami24, możecie płacić za wasze zamówienia szybko i
            bezpiecznie za pomocą różnych metod, takich jak przelewy bankowe,
            karty kredytowe, płatności BLIK, Google Pay oraz Apple Pay. To
            wygodne rozwiązanie zapewniające szybkie potwierdzenie płatności,
            dzięki czemu wasze zamówienia będą przetwarzane i wysyłane jak
            najszybciej.
          </li>
          <li>
            <strong>Płatność przy odbiorze (przesyłka pobraniowa):</strong>{" "}
            Jeśli preferujecie dokonywanie płatności przy odbiorze, możecie
            skorzystać z opcji przesyłki pobraniowej. Po otrzymaniu zamówienia,
            będziecie mogli dokonać płatności za produkty bezpośrednio przy
            odbiorze przesyłki od kuriera. To doskonała opcja dla tych, którzy
            cenią sobie wygodę i płatność w momencie odbioru towaru.
          </li>
          <li>
            <strong>Przelew tradycyjny:</strong> Dla klientów preferujących
            tradycyjne metody płatności, oferujemy również możliwość dokonania
            przelewu bankowego. Po złożeniu zamówienia, otrzymacie Państwo
            wszystkie niezbędne informacje, aby dokonać przelewu na nasze konto
            bankowe. Po zaksięgowaniu wpłaty, przystąpimy do przetwarzania
            waszego zamówienia.
          </li>
        </ul>
        <p>
          Nie ważne, która metoda płatności jest dla was najlepsza - chcemy
          zapewnić, że proces zakupowy w naszym sklepie będzie prosty i
          przyjemny. Dzięki szerokiemu wyborowi opcji płatności, każdy klient
          znajdzie rozwiązanie dostosowane do swoich potrzeb.
        </p>
      </S.Container>
      <Footer />
    </>
  );
};

export default PaymentMethodsPage;
