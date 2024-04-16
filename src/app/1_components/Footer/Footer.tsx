import { FaFacebookF, FaInstagram, FaSpa, FaTiktok } from "react-icons/fa";
import * as S from "./Footer.styled";

const companyName = "LilaGlam Store";
const brandTitle = "Marka";
const aboutUsText = "Dowiedz się więcej o LilaGlam Store.";
const infoTitle = "Informacje";
const cookiesPolicy = "Polityka cookies sklepu internetowego";
const historyTitle = "Nasza historia";
const paymentMethods = "Metody płatności";
const missionValuesTitle = "Misja i wartości";
//Later I will use this copy for other subpages
const contactTitle = "Kontakt";
const contactText = "Masz pytania? Skontaktuj się z nami!";
const contactEmail = "Email: kontakt@lilaglamstore.com";
const contactPhone = "Telefon: +48 605 675 703";
const contactAddress = "Adres: ul. Ogrodowa 26, 98-220 Zduńska Wola";
const policyText = "Zapoznaj się z naszą polityką:";
//
const policyTitle = "Polityka";
const privacyPolicy = "Polityka prywatności";
const storePolicy = "Regulamin sklepu";
const returnsPolicy = "Zwroty i reklamacje";
const copyrightText = "2024 LilaGlam Store. Wszelkie prawa zastrzeżone.";
const helpTitle = "Pomoc";
const yourAccount = "Twoje konto";
const contact = "Kontakt";
const helpCenter = "Centrum pomocy";
const trackShipment = "Śledź przesyłkę";
const deliveryTitle = "Czas i metody dostawy";
const followUsTitle = "Obserwuj nas";
const Footer = () => {
  const cloudinaryLink =
    "https://res.cloudinary.com/dtwbfg3re/image/upload/v1708282127/";

  const links = [
    {
      href: "https://www.facebook.com/profile.php?id=61556106512758",
      icon: <FaFacebookF color="white" size={23} />,
    },
    {
      href: "https://www.instagram.com/lilaglamstore?igsh=MTZ0ZTR5ZGNuejhnZQ==",
      icon: <FaInstagram color="white" size={30} />,
    },
    {
      href: "https://www.tiktok.com/@lilaglam.store?is_from_webapp=1&sender_device=pc",
      icon: <FaTiktok color="white" size={23} />,
    },
  ];

  return (
    <S.Container>
      <S.Box>
        <S.CompanyNameAndLogo>
          <FaSpa />
          <h3>{companyName}</h3>
        </S.CompanyNameAndLogo>
        <div>
          <h3>{brandTitle}</h3>
          <p>{aboutUsText}</p>
          <ul>
            <li>
              <a href="/our-story">{historyTitle}</a>
            </li>
            <li>
              <a href="/mission-and-values">{missionValuesTitle}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>{infoTitle}</h3>
          <ul>
            <li>
              <a href="/returns-and-complaints">{returnsPolicy}</a>
            </li>
            <li>
              <a href="/payment-methods">{paymentMethods}</a>
            </li>
            <li>
              <a href="/delivery-time-and-methods">{deliveryTitle}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>{policyTitle}</h3>
          <ul>
            <li>
              <a href="#">{privacyPolicy}</a>
            </li>
            <li>
              <a href="#">{cookiesPolicy}</a>
            </li>
            <li>
              <a href="#">{storePolicy}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>{helpTitle}</h3>
          <ul>
            <li>
              <a href="#">{yourAccount}</a>
            </li>
            <li>
              <a href="/contact">{contact}</a>
            </li>
            <li>
              <a href="#">{helpCenter}</a>
            </li>
            <li>
              <a href="/tracking">{trackShipment}</a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h3>{followUsTitle}</h3>
            <S.FollowUS>
              {links.map(({ href, icon }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <S.ImgSocialMedia>{icon}</S.ImgSocialMedia>
                  </a>
                </li>
              ))}
            </S.FollowUS>
          </div>
        </div>
      </S.Box>
      <S.Spacer />
      <S.Copy>
        <span>&copy;{copyrightText}</span>
      </S.Copy>
    </S.Container>
  );
};

export default Footer;
