

import { useState, createContext } from "react";

export const UserContext = createContext();

const userContext = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default userContext;
