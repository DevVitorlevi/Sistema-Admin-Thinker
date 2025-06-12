import api from './api';

export const getUsers = async () => {
  try {
    const { data } = await api.get('/users');
    return data.users;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao buscar usuários';
  }
};