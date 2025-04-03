import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({ email: '', role: '' });

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
