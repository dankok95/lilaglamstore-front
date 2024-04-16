import Header from "@/app/1_components/Header/Header";
import * as S from "./ContactPage.styled";
import Footer from "@/app/1_components/Footer/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <h1>Kontakt</h1>
        <div>
          <p>Witaj! Jesteśmy tutaj, aby Ci pomóc!</p>
          <p>
            Jeśli masz jakiekolwiek pytania, uwagi lub potrzebujesz pomocy, nie
            wahaj się skontaktować z nami.
          </p>
          <p>
            Możesz do nas zadzwonić lub wysłać e-mail, a my postaramy się jak
            najszybciej odpowiedzieć.
          </p>
          <p>
            Jesteśmy dostępni od poniedziałku do piątku w godzinach 9:00 -
            17:00.
          </p>
          <p>Dziękujemy za zainteresowanie naszym sklepem!</p>
        </div>
        <div>
          <h2>Dane kontaktowe:</h2>
          <p>
            Numer telefonu: <a href="tel:+48605675703">+48 605 675 703</a>
          </p>
          <p>
            Adres e-mail:{" "}
            <a href="mailto:lilaglamstore@gmail.com">lilaglamstore@gmail.com</a>
          </p>
        </div>
        <div>
          <h2>Dane firmy:</h2>
          <p>Daniel Królikowski</p>
          <p>NIP: 8291750453</p>
          <p>ul.Ogrodowa 26</p>
          <p>98-220 Zduńska Wola</p>
        </div>
      </S.Container>
      <Footer />
    </>
  );
};

export default ContactPage;
