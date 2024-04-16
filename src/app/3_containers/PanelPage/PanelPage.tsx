import Menu from "@/app/1_components/Menu/Menu";
import * as S from "./PanelPage.styled";
import Management from "@/app/2_sections/PanelSections/Management/Management";
import Settings from "@/app/2_sections/PanelSections/Settings/Settings";
import Orders from "@/app/2_sections/PanelSections/Orders/Orders";

type Props = {
  section: string;
};

const PanelPage = ({ section }: Props) => {
  return (
    <S.Wrapper>
      <Menu />
      <S.Panel>
        {section === "management" && <Management />}
        {section === "settings" && <Settings />}
        {section === "orders" && <Orders type="user" />}
        {section === "ordersClients" && <Orders type="admin" />}
      </S.Panel>
    </S.Wrapper>
  );
};
export default PanelPage;
