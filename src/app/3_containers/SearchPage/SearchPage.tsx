import * as S from "./SearchPage.styled";
import { useEffect, useState } from "react";
import { TProduct } from "@/app/types/product";
import Product from "@/app/1_components/Product/Product";
import { getAllProductsRequest } from "@/app/api/productRequests";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import Button from "@/app/1_components/Button/Button";
import Header from "@/app/1_components/Header/Header";
import Footer from "@/app/1_components/Footer/Footer";

const filters = [
  { title: "Kategorie", items: ["Sukienki", "Bolerki", "Kombinezony"] },
  { title: "Rozmiary", items: ["XS", "S", "M", "L", "XL"] },
  {
    title: "Kolor",
    items: ["Czerwony", "Niebieski", "Zielony", "Żółty", "Różowy", "Biały"],
  },
];

const SearchPage = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [productsToDisplay, setProductsToDisplay] = useState<TProduct[]>([]);
  const [filtersOpened, setFiltersOpened] = useState<boolean>(false);
  const router = useRouter();

  const [filtersState, setFiltersState] = useState<ParsedUrlQuery>(
    router.query
  );

  useEffect(() => {
    setFiltersState(router.query);
  }, [router.query]);

  useEffect(() => {
    if (router.query) {
      let filteredProducts = router.query.term
        ? products.filter((product) =>
            product.name
              .toLowerCase()
              .includes((router.query.term as string).toLowerCase())
          )
        : products;

      if (filtersState["Kategorie"] && filtersState["Kategorie"]?.length) {
        const value: string[] =
          typeof filtersState["Kategorie"] === "string"
            ? ([filtersState["Kategorie"]] as string[])
            : (filtersState["Kategorie"] as string[]);
        filteredProducts = filteredProducts.filter((product) =>
          value.includes(product.category)
        );
      }

      if (filtersState["Rozmiary"] && filtersState["Rozmiary"]?.length) {
        const value: string[] =
          typeof filtersState["Rozmiary"] === "string"
            ? ([filtersState["Rozmiary"]] as string[])
            : (filtersState["Rozmiary"] as string[]);
        filteredProducts = filteredProducts.filter((product) =>
          product.variants.some((variant) =>
            value.includes(variant.size.toUpperCase())
          )
        );
      }
      if (filtersState["Kolor"] && filtersState["Kolor"]?.length) {
        const value: string[] =
          typeof filtersState["Kolor"] === "string"
            ? ([filtersState["Kolor"]] as string[])
            : (filtersState["Kolor"] as string[]);
        filteredProducts = filteredProducts.filter((product) =>
          product.variants.some((variant) => value.includes(variant.color))
        );
      }
      setProductsToDisplay(filteredProducts);
    }
  }, [router.query, setProductsToDisplay, products]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProductsRequest();
      if (response.success) {
        setProducts(response.products);
      }
    };
    getProducts();
  }, []);

  const handleFilter = () => {
    router.replace(
      { pathname: "/search", query: { ...filtersState } },
      undefined,
      { shallow: true }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilter();
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltersState((prevState) => ({ ...prevState, term: e.target.value }));
  };
  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    setFiltersState((prevState) => {
      const key = e.target.name;
      const prevValue: string[] =
        typeof prevState[key] === "string"
          ? ([prevState[key]] as string[])
          : (prevState[key] as string[]);
      const index = prevValue?.indexOf(item);
      let prevItems;

      if (index !== undefined && index > -1) {
        const newValue = prevValue?.filter((value) => value !== item);
        prevItems = newValue;
      } else {
        prevItems = prevState[key]
          ? [...(prevValue as string[]), item]
          : [item];
      }

      const updatedFilters = {
        ...prevState,
        [key]: prevItems,
      };
      return updatedFilters;
    });
  };

  const handleCheck = (key: string, item: string): boolean => {
    const value: string[] =
      typeof filtersState[key] === "string"
        ? ([filtersState[key]] as string[])
        : (filtersState[key] as string[]);
    if (!value) return false;
    return value.includes(item);
  };

  const renderProducts = () => {
    if (productsToDisplay.length === 0) return <S.Title>Brak wyników</S.Title>;
    return (
      <>
        <S.Title>Wyniki wyszukiwania</S.Title>
        {productsToDisplay.map((product) => (
          <div key={product._id}>
            <Product product={product} type="multi" />
          </div>
        ))}
      </>
    );
  };

  const renderFilters = () => {
    return filters.map((filter) => {
      return (
        <S.FilterCheckboxes key={filter.title}>
          <S.CheckboxesTitle>{filter.title}</S.CheckboxesTitle>
          {filter.items.map((item) => (
            <S.CheckBoxWrapper key={filter.title + item}>
              <S.CheckboxContainer>
                <S.CheckBox
                  type="checkbox"
                  name={filter.title}
                  checked={handleCheck(filter.title, item)}
                  onChange={(e) => handleCheckbox(e, item)}
                />
                <S.Checkmark />
              </S.CheckboxContainer>
              <div>{item}</div>
            </S.CheckBoxWrapper>
          ))}
        </S.FilterCheckboxes>
      );
    });
  };
  return (
    <>
      <Header />
      <S.Wrapper>
        <div>
          <S.Filters $opened={filtersOpened}>
            <S.TopBar>
              <S.CloseIcon onClick={() => setFiltersOpened(false)} />
            </S.TopBar>
            <S.Title>Filtry</S.Title>
            <S.Input
              placeholder="Wyszukaj"
              value={filtersState.term as string}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            {renderFilters()}
            <Button onClick={handleFilter}>Filtruj</Button>
          </S.Filters>
          <S.Results>
            <S.FilterIcon onClick={() => setFiltersOpened(true)} />
            <S.ProductsWrapper>{renderProducts()}</S.ProductsWrapper>
          </S.Results>
        </div>
      </S.Wrapper>
      <Footer />
    </>
  );
};
export default SearchPage;
