import Footer from "@/app/1_components/Footer/Footer";
import Header from "@/app/1_components/Header/Header";
import { FavouritesProvider } from "@/app/context/favourites";
import { TrolleyProvider } from "@/app/context/trolley";
import { UserProvider } from "@/app/context/user";
import GlobalStyles from "@/app/utils/globalStyles";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";

const font = Montserrat({ weight: "400", subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className={font.className}>
      <AnimatePresence mode="wait">
        <TrolleyProvider>
          <UserProvider>
            {" "}
            <FavouritesProvider>
              <GlobalStyles />
              <Component {...pageProps} key={router.asPath} />
            </FavouritesProvider>{" "}
          </UserProvider>
        </TrolleyProvider>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
