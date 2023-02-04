import React, { createContext, useContext, useState } from "react";
import { SlHome } from "react-icons/sl";
import { Links, SidebarData } from "../components/sidebar/sidebar_data";

type StateContextProps = {
  screenSize: number | undefined;
  setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
  searchText: string | null;
  setSearchText: React.Dispatch<React.SetStateAction<string | null>>;
  isSidebarActive: boolean;
  setIsSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
  activeRoute: Links;
  setActiveRoute: React.Dispatch<React.SetStateAction<Links>>;
};

const StateContext = createContext<StateContextProps>({
  screenSize: undefined,
  setScreenSize: () => {},
  searchText: null,
  setSearchText: () => {},
  isSidebarActive: true,
  setIsSidebarActive: () => {},
  activeRoute: {
    icon: SlHome,
    title: "Welcome",
    description: "Welcome page!",
    path: "/welcome",
  },
  setActiveRoute: () => {},
});

type ChildrenProps = {
  children: React.ReactNode;
};

export const StateContextProvider = ({ children }: ChildrenProps) => {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
  const [searchText, setSearchText] = useState<string | null>(null);
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);
  const [activeRoute, setActiveRoute] = useState<Links>({
    icon: SlHome,
    title: "Welcome",
    description: "Welcome page!",
    path: "/welcome",
  });

  return (
    <StateContext.Provider
      value={{
        screenSize,
        setScreenSize,
        searchText,
        setSearchText,
        isSidebarActive,
        setIsSidebarActive,
        activeRoute,
        setActiveRoute,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
