import { GetStaticPaths, GetStaticProps } from "next";

const sections: string[] = [
  "orders",
  "payments",
  "opinions",
  "settings",
  "management",
  "ordersClients",
];

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { section: "section" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const section = params?.section as string;
  if (sections.includes(section)) {
    return {
      props: {
        section,
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
