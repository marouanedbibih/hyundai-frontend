"use client";

import React, { createContext, useState, ReactNode, useEffect, useContext } from "react";

// Define the type for the user context state
interface UserContextProps {
  // Token state
  token: string | null;
  setTokenInLocalStorage: (token: string) => void;
  getTokenFromLocalStorage: () => string | null;
  removeTokenFromLocalStorage: () => void;

  // Role state
  role: string | null;
  setRoleInLocalStorage: (role: string) => void;
  getRoleFromLocalStorage: () => string | null;
  removeRoleFromLocalStorage: () => void;

}

// Create the context
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Define the provider component
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  // Token handlers
  const setTokenInLocalStorage = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const getTokenFromLocalStorage = () => {
    return localStorage.getItem("token");
  };

  const removeTokenFromLocalStorage = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // Role handlers
  const setRoleInLocalStorage = (newRole: string) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);
  };

  const getRoleFromLocalStorage = () => {
    return localStorage.getItem("role");
  };

  const removeRoleFromLocalStorage = () => {
    setRole(null);
    localStorage.removeItem("role");
  };



  // Load initial values from localStorage on component mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);

    const savedRole = localStorage.getItem("role");
    if (savedRole) setRole(savedRole);

  }, []);

  return (
    <UserContext.Provider
      value={{
        token,
        setTokenInLocalStorage,
        getTokenFromLocalStorage,
        removeTokenFromLocalStorage,
        role,
        setRoleInLocalStorage,
        getRoleFromLocalStorage,
        removeRoleFromLocalStorage,

      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export { UserProvider };
