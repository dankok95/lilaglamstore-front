import { getSingleOrderRequest } from "@/app/api/orderRequests";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { orderId: "orderId" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await getSingleOrderRequest(params?.orderId as string);
  if (response.success) {
    const order = response.order;
    return {
      props: {
        order: order,
      },
    };
  } else {
    return {
      props: {},
      redirect: {
        destination: "/panel/orders",
        permanent: false,
      },
    };
  }
};
