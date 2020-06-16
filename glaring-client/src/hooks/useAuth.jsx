import React, { createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const isAuth = async (id, key) => {
  try {
    await axios.patch(`/api/sessions/${id}`, key);
    return true;
  } catch (err) {
    alert(err);
  }
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a DatabaseProvider");
  }
  return context;
}

function AuthProvider({ children }) {
  return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>;
}

export { useAuth, AuthProvider };
