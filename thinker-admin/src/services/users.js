import api from './api';

export const getUsers = async () => {
  try {
    const { data } = await api.get('/users');

    // Já que a resposta é um array direto, só retornamos data
    if (Array.isArray(data)) {
      return data;
    } else {
      throw new Error('Formato de resposta inesperado da API');
    }
  } catch (error) {
    const message =
      error?.response?.data?.message || error.message || 'Erro ao buscar usuários';
    throw new Error(message);
  }
};
