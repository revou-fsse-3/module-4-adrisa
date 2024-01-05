import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Context {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

interface Props {
  children: ReactNode;
}

const defaultValue: Context = {
  user: undefined,
  setUser: () => {}, // Provide a default function, it will be overridden by the actual implementation
};

export const AppContext = createContext(defaultValue);

const ContexProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>();

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContexProvider;
