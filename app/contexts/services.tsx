"use client";

import { FC, createContext, PropsWithChildren, useContext } from "react";
import { Service } from "@/types";

interface ServicesProviderProps extends PropsWithChildren {
  service: Service;
}

interface ServicesContextProps {
  service: Service;
}

const ServicesContext = createContext<ServicesContextProps | null>(null);

export const ServicesProvider: FC<ServicesProviderProps> = ({
  children,
  service,
}) => {
  return (
    <ServicesContext.Provider
      value={{
        service,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): {
  service: Service;
} => {
  const context = useContext(ServicesContext);

  if (!context) {
    throw new Error("Tiene que estar envuelto en un contexto");
  }

  return context;
};
