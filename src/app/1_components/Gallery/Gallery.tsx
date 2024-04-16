import * as S from "./Gallery.styled";
import { useState } from "react";
import SwiperHorizontal from "../SwiperHorizontal/SwiperHorizontal";

type Props = {
  images: string[];
  productName: string;
};

export const Gallery = ({ images, productName }: Props) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);

  const handleThumbnailClick = (image: string) => {
    if (image != mainImage) setMainImage(image);
  };

  const handleNextSlide = () => {
    if (selectedProductIndex < images.length - 1) {
      setSelectedProductIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (selectedProductIndex > 0) {
      setSelectedProductIndex((prevIndex) => prevIndex - 1);
    }
  };

  const galleryElements = images
    .slice(1)
    .map((image, index) => (
      <S.ProductImg
        $type="otherImg"
        key={index}
        alt={productName}
        src={image}
        onClick={() => handleThumbnailClick(image)}
      />
    ));

  return (
    <S.Box>
      <S.BoxProductImg>
        <SwiperHorizontal
          slides={images.slice(1).map((image, index) => (
            <S.ProductImg
              key={index}
              src={image}
              $type="otherImg"
              alt={productName}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
          type="vertical"
          selectedIndex={selectedProductIndex}
          onNextSlide={handleNextSlide}
          onPrevSlide={handlePrevSlide}
          slideHeight={200}
        />
      </S.BoxProductImg>
      <S.ProductImg $type="mainImg" alt={productName} src={mainImage} />
    </S.Box>
  );
};
