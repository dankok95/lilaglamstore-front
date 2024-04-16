import { useState } from "react";
import { useRouter } from "next/router";

import Button from "../Button/Button";
import { useUserContext } from "@/app/context/user";
import TrolleyDrawer from "../TrolleyDrawer/TrolleyDrawer";
import { useTrolleyContext } from "@/app/context/trolley";

import * as S from "./Header.styled";

const headerElements = [
  { name: "Sukienki", link: "/search?Kategorie=Sukienki" },
  { name: "Bolerka", link: "/search?Kategorie=Bolerki" },
  { name: "Kombinezony", link: "/search?Kategorie=Kombinezony" },
];

const Header = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);

  const { trolley } = useTrolleyContext();

  const user = useUserContext();
  const router = useRouter();

  const renderHeaderElements = () => {
    return headerElements.map((element) => (
      <S.HeaderElement
        key={element.name}
        onClick={() => router.push(element.link)}
      >
        {element.name}
      </S.HeaderElement>
    ));
  };
  return (
    <>
      {isDrawerVisible && (
        <TrolleyDrawer setIsDrawerVisible={setIsDrawerVisible} />
      )}
      <S.Wrapper>
        <S.TopBar>
          <S.Logo onClick={() => router.push("/")}>Girl's Dresses</S.Logo>
          {!user ? (
            <div>
              <Button onClick={() => router.push("/register")}>
                Zarejestruj się
              </Button>
              <Button onClick={() => router.push("/login")}>Zaloguj się</Button>
            </div>
          ) : (
            <S.UserPanelIcon onClick={() => router.push("/panel/orders")} />
          )}
        </S.TopBar>
        <S.BottomBar>
          <div>{renderHeaderElements()}</div>

          <S.TrolleyWrapper onClick={() => setIsDrawerVisible(true)}>
            <S.TrolleyIcon />
            {trolley?.items.length !== 0 && (
              <S.TrolleyCount>{trolley?.items.length}</S.TrolleyCount>
            )}
          </S.TrolleyWrapper>
        </S.BottomBar>
      </S.Wrapper>
    </>
  );
};
export default Header;
