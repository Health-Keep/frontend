import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        accessGranted,
        setAccessGranted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
