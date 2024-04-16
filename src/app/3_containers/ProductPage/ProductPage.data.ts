import { GetStaticProps } from "next";
import { getSingleProductRequest } from "@/app/api/productRequests";

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "productId" } }],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.productId;
  const response = await getSingleProductRequest(productId as string);

  if (response && response.success) {
    const props = { product: response?.product };
    return {
      props,
    };
  }
  return {
    props: {},
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
