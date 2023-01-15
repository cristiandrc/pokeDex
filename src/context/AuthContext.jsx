import React, { useState, createContext } from "react";

const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => setAuth(undefined);

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
