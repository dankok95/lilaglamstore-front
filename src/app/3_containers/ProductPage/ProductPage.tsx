import { useEffect, useState } from "react";

import { TProduct } from "@/app/types/product";
import Product from "../../1_components/Product/Product";
import { getAllProductsRequest } from "@/app/api/productRequests";

import * as S from "./ProductPage.styled";
import Header from "@/app/1_components/Header/Header";
import Footer from "@/app/1_components/Footer/Footer";
import SwiperHorizontal from "@/app/1_components/SwiperHorizontal/SwiperHorizontal";

type Props = {
  product: TProduct;
};

export const ProductPage = ({ product }: Props) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);

  const getProducts = async () => {
    const response = await getAllProductsRequest();
    if (response.success) {
      setProducts(response.products);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!product || products.length === 0) return null;

  const handleNextSlide = () => {
    if (selectedProductIndex < products.length - 1) {
      setSelectedProductIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (selectedProductIndex > 0) {
      setSelectedProductIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        <Product product={product} type="single" />
        <S.ProductsWrapper>
          <SwiperHorizontal
            slides={products.map((p) => (
              <Product key={p._id} product={p} type="multi" />
            ))}
            type="horizontal"
            selectedIndex={selectedProductIndex}
            onNextSlide={handleNextSlide}
            onPrevSlide={handlePrevSlide}
          />
        </S.ProductsWrapper>
      </S.Container>
      <Footer />
    </>
  );
};

export default ProductPage;
