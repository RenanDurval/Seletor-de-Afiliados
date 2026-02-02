'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type UserType = 'producer' | 'affiliate' | null;

interface AuthContextType {
  userType: UserType;
  login: (type: 'producer' | 'affiliate') => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userType, setUserType] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check localStorage on mount
    const storedUser = localStorage.getItem('seletor_user_type') as UserType;
    if (storedUser) {
      setUserType(storedUser);
    }
    setIsLoading(false);
  }, []);

  const login = (type: 'producer' | 'affiliate') => {
    setUserType(type);
    localStorage.setItem('seletor_user_type', type);
    router.push(type === 'producer' ? '/producer' : '/affiliate');
  };

  const logout = () => {
    setUserType(null);
    localStorage.removeItem('seletor_user_type');
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ userType, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
