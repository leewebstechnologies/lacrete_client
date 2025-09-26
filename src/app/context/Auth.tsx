"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load from localStorage once on mount
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) setUser(userInfo);
    setLoading(false); // ✅ finished checking localStorage
  }, []);

  const login = (user: string) => {
    localStorage.setItem("userInfo", user);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
