import React, { createContext, useContext, ReactNode, useState } from "react";

interface NameComponentParentProps {
  value: string | null,
  children: ReactNode,
};

interface NameComponentProps {
  name: null | string;
};

interface UpdateNameComponentProps {
  setName: (name: string) => void;
};

const NameComponent = createContext<NameComponentProps>({ name: null});
const UpdateNameContext = createContext<UpdateNameComponentProps>({ setName: (name: string) => {}});

export const UseName = () => {
  return useContext(NameComponent);
};

export const UpdateName = () => {
  return useContext(UpdateNameContext).setName;
};

export const NameComponentParent: React.FC<NameComponentParentProps> = ({ children, value }) => {

  const [name, setName] = useState<string | null>(value)

  return (
    <NameComponent.Provider value={{ name }}>
      <UpdateNameContext.Provider value={{ setName }}>
        {children}
      </UpdateNameContext.Provider>
    </NameComponent.Provider>
  );
};