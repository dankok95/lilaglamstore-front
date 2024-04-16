import { Dispatch, SetStateAction } from "react";
import * as S from "./InpostGeowidgetModal.styled";
import { InpostGeowidget } from "react-inpost-geowidget";

type Props = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  chooseParcel: (parcel: string) => void;
};

const InpostGeowidgetModal = ({ setIsModalOpen, chooseParcel }: Props) => {
  const handlePoint = (e: any) => {
    chooseParcel(e.name);
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper onClick={() => setIsModalOpen(false)}>
      <S.Modal onClick={(e) => e.preventDefault()}>
        <InpostGeowidget
          onPoint={handlePoint}
          token="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQlpXVzFNZzVlQnpDYU1XU3JvTlBjRWFveFpXcW9Ua2FuZVB3X291LWxvIn0.eyJleHAiOjIwMjc3ODQyNjMsImlhdCI6MTcxMjQyNDI2MywianRpIjoiMTE3YTY1OWItMmE1NC00NjcxLTg3ZjItOTkyOGVhOTQ3ODUyIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pbnBvc3QucGwvYXV0aC9yZWFsbXMvZXh0ZXJuYWwiLCJzdWIiOiJmOjEyNDc1MDUxLTFjMDMtNGU1OS1iYTBjLTJiNDU2OTVlZjUzNTpWcTl0X1FveEdEZWJmRG9pTGExVFZ5ZDZ4X0laSFhMYlJfQWdyVl9ZdHNJIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2hpcHgiLCJzZXNzaW9uX3N0YXRlIjoiMWI3ZTQyYjAtMDVmZi00NWUwLWEyMTItYTdkMjdjYjllZWFjIiwic2NvcGUiOiJvcGVuaWQgYXBpOmFwaXBvaW50cyIsInNpZCI6IjFiN2U0MmIwLTA1ZmYtNDVlMC1hMjEyLWE3ZDI3Y2I5ZWVhYyIsImFsbG93ZWRfcmVmZXJyZXJzIjoiIiwidXVpZCI6ImY3ZDJmODZmLTQ0MjYtNDNiZS1iNDI4LTdhM2MxNmExYmZmZCJ9.OcLEblKjiGAd7SDKBAio_ybI3Ui8DhalxbTzLBkJoi2MqDLpn3xV7HcJ9WMxYVFJnA4vaj2TfFKYOAj2vCHtzKNqWvdpgO096kYPFyl1lydfs6bXclzta5timYZPaAFS9lsq6RywykxDr3_uYq8N1pDNvxoiVon9cs9QMTm4knMGBx5f4LyqXU7WU_7VULFwo7qHv-XxxPKx2oGGbrs4kokmdhAks7Db-PrB2hmKMUDvuUrh-yq8OrOqLRYNlDU4ahmFL0ynQY3hMmu1YaB2VGVOZhyxfBayNx8g01TvDO4QWr1WubjVCPN5-t1L6DDChybaHYoRZxKDk0bHAJdwtA"
        />
      </S.Modal>
    </S.Wrapper>
  );
};

export default InpostGeowidgetModal;
