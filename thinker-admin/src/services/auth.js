import api from './api';

export const loginAdmin = async (email, password) => {
  try {
    const { data } = await api.post('/login', { email, password });
    localStorage.setItem('admin_token', data.token);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao fazer login';
  }
};

export const logoutAdmin = () => {
  localStorage.removeItem('admin_token');
};

export const checkAdminRole = async () => {
  try {
    await api.get('/checkuser');
    return true;
  } catch (error) {
    return false;
  }
};