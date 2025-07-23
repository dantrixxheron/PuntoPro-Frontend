import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [mail, setUser] = useState(null);

  const login = (mail, password) => setUser({ mail, password });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ mail, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  return useContext(UserContext);
}
