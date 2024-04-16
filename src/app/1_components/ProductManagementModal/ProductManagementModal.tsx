import { TProduct } from "@/app/types/product";
import * as S from "./ProductManagementModal.styled";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import Button from "../Button/Button";
import {
  addProductRequest,
  editProductRequest,
} from "@/app/api/productRequests";
import Router from "next/router";

type Props = {
  closeModal: () => void;
  product?: TProduct | null;
};

const ProductManagementModal = ({ closeModal, product }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: product ? product : {} });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });
  const photos = watch("photos");

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("waistWidth", data.waistWidth);
    formData.append("chestWidth", data.chestWidth);
    formData.append("totalLength", data.totalLength);
    formData.append("inseamLength", data.inseamLength || "");
    formData.append("sleeveLength", data.sleeveLength || "");
    formData.append("_id", product?._id || "");
    let existingPhotos = [];
    if (data.photos) {
      for (let i = 0; i < data.photos.length; i++) {
        if (typeof data.photos[i] !== "string") {
          formData.append("photos", data.photos[i]);
        } else {
          existingPhotos.push(data.photos[i]);
        }
      }
    }
    formData.append("existingPhotos", JSON.stringify(existingPhotos));
    formData.append("variants", JSON.stringify(data.variants));
    const response = product
      ? await editProductRequest(formData)
      : await addProductRequest(formData);
    if (response.success) {
      closeModal();
      Router.reload();
    }
  };

  const handleAddphotos = (newphotos: FileList) => {
    const currentphotos = watch("photos") || [];
    const updatedphotos = [
      ...Array.from(currentphotos),
      ...Array.from(newphotos),
    ];
    setValue("photos", updatedphotos as any);
  };

  const handleRemoveImage = (index: number) => {
    const currentphotos = Array.from(watch("photos") || []);
    currentphotos.splice(index, 1);
    setValue("photos", currentphotos as any);
  };

  return (
    <S.Wrapper onClick={() => closeModal()}>
      <S.Modal
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="photos"
          control={control}
          defaultValue={[]}
          render={({ field: { onChange, value } }) => (
            <>
              <input
                type="file"
                id="photos"
                accept="image/*"
                hidden
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    handleAddphotos(e.target.files);
                  }
                }}
              />
              <S.ImagesWrapper>
                {photos &&
                  photos.map((file: File | string, index: number) => (
                    <S.ImagePreviewWrapper key={index}>
                      <S.ImagePreview
                        src={
                          typeof file === "string"
                            ? file
                            : URL.createObjectURL(file)
                        }
                        alt="Preview"
                        width={100}
                        height={100}
                      />
                      <div>
                        <S.CloseIcon onClick={() => handleRemoveImage(index)} />
                      </div>
                    </S.ImagePreviewWrapper>
                  ))}
                <S.ImageLabel htmlFor="photos">
                  <S.CameraIcon />
                </S.ImageLabel>
              </S.ImagesWrapper>
            </>
          )}
        />
        <S.Input {...register("name")} placeholder="Nazwa produktu" />
        <S.Input {...register("description")} placeholder="Opis produktu" />
        <div>Kategoria:</div>
        <S.Select {...register("category")}>
          <option value="Sukienki">Sukienki</option>
          <option value="Bolerki">Bolerka</option>
          <option value="Jumpsuits">Kombinezony</option>
        </S.Select>
        <S.Input
          {...register("price", {
            valueAsNumber: true,
            validate: (value) => value > 0,
          })}
          placeholder="Cena"
        />
        {errors.price && <p>Niepoprawna cena</p>}
        {fields.map((field, index) => (
          <S.Variant key={field.id}>
            <S.Row>
              <S.VariantSelect
                defaultValue="xs"
                {...register(`variants.${index}.size`)}
              >
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </S.VariantSelect>
              <S.VariantInput
                {...register(`variants.${index}.color`)}
                placeholder="Kolor"
              />
              <S.VariantInput
                {...register(`variants.${index}.quantity`, {
                  valueAsNumber: true,
                  validate: (value) => value > 0,
                })}
                placeholder="Ilość"
              />
              <S.MinusIcon onClick={() => remove(index)} />
            </S.Row>
            <S.Box>
              <S.Dimensions>
                <S.DimensionsTitle>Szerokość pas</S.DimensionsTitle>
                <S.InputDimensions
                  {...register(`variants.${index}.waistWidth`, {
                    // valueAsNumber: true,
                    // validate: (value) => value > 0,
                  })}
                  placeholder="Podaj szerokość w pasie"
                />
              </S.Dimensions>
              <S.Dimensions>
                <S.DimensionsTitle>Szerokość pachy</S.DimensionsTitle>
                <S.InputDimensions
                  {...register(`variants.${index}.chestWidth`, {
                    // valueAs: true,
                    // validate: (value) => value > 0,
                  })}
                  placeholder="Podaj szerokość pachy"
                />
              </S.Dimensions>
              <S.Dimensions>
                <S.DimensionsTitle>Długość całkowita</S.DimensionsTitle>
                <S.InputDimensions
                  {...register(`variants.${index}.totalLength`, {
                    // valueAs: true,
                    // validate: (value) => value > 0,
                  })}
                  placeholder="Podaj długość całkowitą"
                />
              </S.Dimensions>
              {product?.category === "Jumpsuits" && (
                <S.Dimensions>
                  <S.DimensionsTitle>
                    Długość nogawki od kroku
                  </S.DimensionsTitle>
                  <S.InputDimensions
                    {...register(`variants.${index}.inseamLength`, {
                      // valueAs: true,
                      // validate: (value) => value > 0,
                    })}
                    placeholder="Podaj długość nogawki od kroku"
                  />
                </S.Dimensions>
              )}
              {product?.category === "Bolerki" && (
                <S.Dimensions>
                  <S.DimensionsTitle>Długość rękawa</S.DimensionsTitle>
                  <S.InputDimensions
                    {...register(`variants.${index}.sleeveLength`, {
                      // valueAs: true,
                      // validate: (value) => value > 0,
                    })}
                    placeholder="Podaj długość rękawa"
                  />
                </S.Dimensions>
              )}
            </S.Box>
          </S.Variant>
        ))}
        <S.PlusIcon
          onClick={() =>
            append({
              size: "xs",
              color: "",
              quantity: 0,
              waistWidth: 0,
              chestWidth: 0,
              totalLength: 0,
            })
          }
        />
        <Button>{product ? "Edytuj" : "Dodaj"}</Button>
      </S.Modal>
    </S.Wrapper>
  );
};
export default ProductManagementModal;
