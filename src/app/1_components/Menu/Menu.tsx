import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { useCookies } from "react-cookie";

import Button from "../Button/Button";
import { useUserContext } from "@/app/context/user";

import * as S from "./Menu.styled";

const MenuElements: Array<{
  icon: ReactNode;
  title: string;
  items: Array<{ link: string; title: string }>;
  role: "user" | "admin";
}> = [
  {
    icon: <S.AdminIcon />,
    title: "Zarządzanie stroną",
    items: [
      { title: "Produkty", link: "management" },
      { title: "Zamówienia Klientów", link: "ordersClients" },
    ],
    role: "admin",
  },
  {
    icon: <S.OrdersIcon />,
    title: "Zamówienia",
    items: [
      { title: "Twoje zamówienia", link: "orders" },
      { title: "Płatności", link: "payments" },
      { title: "Opinie", link: "opinions" },
    ],
    role: "user",
  },
  {
    icon: <S.UserIcon />,
    title: "Konto",
    items: [
      { title: "Ustawienia", link: "settings" },
      { title: "Płatności", link: "payments" },
    ],
    role: "user",
  },
];

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const router = useRouter();
  const user = useUserContext();
  const renderMenuElements = () => {
    return MenuElements.map((element) => {
      if (
        element.role === "user" ||
        (element.role === "admin" && user?.role === "admin")
      ) {
        return (
          <S.MenuElement key={element.title}>
            <S.MenuHeader>
              {element.icon} {element.title}
            </S.MenuHeader>
            {element.items.map((item) => (
              <S.MenuItem
                key={item.title}
                onClick={() => router.push(`/panel/${item.link}`)}
              >
                {item.title}
              </S.MenuItem>
            ))}
          </S.MenuElement>
        );
      }
    });
  };
  const handleLogout = () => {
    removeCookie("refreshToken");
    router.push("/");
  };
  return (
    <>
      <S.MenuIcon onClick={() => setIsMenuOpen(true)} />
      <S.Wrapper $visible={isMenuOpen}>
        <S.MenuWrapper>
          <S.CloseIcon onClick={() => setIsMenuOpen(false)} />
          <S.Title>Panel</S.Title>
          <Button
            version="secondary"
            textPosition="left"
            onClick={() => router.push("/")}
          >
            <S.HomeIcon /> Home
          </Button>
          <S.Menu>{renderMenuElements()}</S.Menu>
        </S.MenuWrapper>
        <Button onClick={handleLogout}>Wyloguj się</Button>
      </S.Wrapper>
    </>
  );
};
export default Menu;
