import { createContext } from "react";

const UserContext = createContext(null);
// Provider
// СҮҮ ХХК байж болно. Иргэдэд сүү ханган нийлүүлдэг

const UserProvider = ({ children }) => {
  const userName = "Shine Suu";

  return (
    <UserContext.Provider value={userName}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };

//Consumer
// Жирийн иргэн болон хэрэглэгчид
