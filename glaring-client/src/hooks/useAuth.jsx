import { createContext, useContext } from "react";

const AuthContext = createContext();

function UseAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a DatabaseProvider");
  }
  return context;
}

function AuthProvider({ children }) {
  return <AuthContext.Provider value={false}>{children}</AuthContext.Provider>;
}

export { UseAuth, AuthProvider };
