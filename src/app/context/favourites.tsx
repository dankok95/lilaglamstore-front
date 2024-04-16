import React, { useEffect, useMemo, useState } from "react";
import { TTrolley } from "../types/trolley";
import useLocalStorage from "../hooks/localStorage";
import { getFavouritesRequest } from "../api/userRequests";
import { useUserContext } from "./user";

const FavouritesContext = React.createContext<{
  favourites: string[] | null;
  setFavourites: React.Dispatch<React.SetStateAction<string[] | null>>;
}>({
  favourites: null,
  setFavourites: () => {},
});

export const useFavouritesContext = () => {
  const context = React.useContext(FavouritesContext);
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const FavouritesProvider = ({ children }: Props) => {
  const [favourites, setFavourites] = useState<string[] | null>(null);
  const [favouritesStorage, setFavouritesStorage] = useLocalStorage(
    "favourites",
    ""
  );

  const user = useUserContext();

  useEffect(() => {
    const getFavourites = async (id: string) => {
      const res = await getFavouritesRequest(id);

      setFavourites(res.favourites);
    };

    if (!favourites && user) {
      getFavourites(user._id);
    }
  }, [user, setFavourites, favourites]);

  useEffect(() => {
    console.log("favourites", favourites);
  }, [favourites]);
  const value = useMemo(() => {
    return { favourites, setFavourites };
  }, [favourites, setFavourites]);
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
