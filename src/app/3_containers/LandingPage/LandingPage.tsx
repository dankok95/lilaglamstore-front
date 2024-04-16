import Button from "@/app/1_components/Button/Button";
import { TProduct } from "@/app/types/product";

import * as S from "./LandingPage.styled";
import Product from "@/app/1_components/Product/Product";
import { getAllProductsRequest } from "@/app/api/productRequests";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/app/1_components/Footer/Footer";
import Header from "@/app/1_components/Header/Header";
import SwiperHorizontal from "@/app/1_components/SwiperHorizontal/SwiperHorizontal";

const LandingPage = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);

  const router = useRouter();

  const getProducts = async () => {
    const response = await getAllProductsRequest();
    if (response.success) {
      setProducts(response.products);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    router.push({ pathname: "/search", query: { term: searchTerm } });
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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

  if (!products.length) return null;

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.DiscoverContainer>
          <S.DiscoverTitle>Odkryj sukienki dla dziewczynek</S.DiscoverTitle>
          <S.SearchWrapper>
            <S.SearchIcon />
            <S.SubmitWrapper>
              <Button type="icon" onClick={handleSearch}>
                <S.SubmitIcon />
              </Button>
            </S.SubmitWrapper>
            <S.SearchBar
              placeholder={"Czego tu szukasz?"}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </S.SearchWrapper>
        </S.DiscoverContainer>
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
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default LandingPage;
