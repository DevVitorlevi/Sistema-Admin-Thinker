import { createContext, useState, useEffect } from 'react';
import { loginAdmin, checkAdminRole, logoutAdmin } from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const isAdmin = await checkAdminRole();
        if (isAdmin) {
          const token = localStorage.getItem('admin_token');
          if (token) {
            // Aqui você pode buscar os dados do admin se necessário
            setAdmin({ authenticated: true });
          }
        }
      } catch (error) {
        console.error('Erro ao verificar admin:', error);
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, []);

  const login = async (email, password) => {
    const data = await loginAdmin(email, password);
    setAdmin({ ...data.admin, authenticated: true });
    return data;
  };

  const logout = () => {
    logoutAdmin();
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};