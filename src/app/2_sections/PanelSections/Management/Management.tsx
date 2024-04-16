import Button from "@/app/1_components/Button/Button";
import * as S from "./Management.styled";
import Product from "@/app/1_components/Product/Product";
import { TProduct } from "@/app/types/product";
import { useEffect, useState } from "react";
import ProductManagementModal from "@/app/1_components/ProductManagementModal/ProductManagementModal";
import { getAllProductsRequest } from "@/app/api/productRequests";

const Management = () => {
  const [isModalActive, setModalActive] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);

  const getProducts = async () => {
    const response = await getAllProductsRequest();
    if (response.success) {
      setProducts(response.products);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const openModal = (product: TProduct) => {
    setSelectedProduct(product);
    setModalActive(true);
  };
  const closeModal = () => {
    setSelectedProduct(null);
    setModalActive(false);
  };

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <div key={product._id}>
          <Product
            type="multi"
            product={product}
            onClick={() => openModal(product)}
          />
        </div>
      );
    });
  };
  return (
    <>
      {isModalActive && (
        <ProductManagementModal
          closeModal={closeModal}
          product={selectedProduct}
        />
      )}
      <S.Wrapper>
        <Button onClick={() => setModalActive(true)}>Dodaj produkt</Button>
        <S.Title>Edytuj wybrany produkt:</S.Title>
        <S.ProductsWrapper>{renderProducts()}</S.ProductsWrapper>
      </S.Wrapper>
    </>
  );
};
export default Management;
