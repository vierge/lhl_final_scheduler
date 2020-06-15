import { createContext, useContext } from "react";

export const AuthContext = createContext();

export function UseAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a DatabaseProvider");
  }
  return context;
}
