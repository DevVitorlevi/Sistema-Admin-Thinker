import api from './api';
export const getUsers = async () => {
  try {
    const response = await api.get('/users');

    // Garantindo que a resposta tenha o formato esperado
    if (response.data && Array.isArray(response.data.users)) {
      return response.data.users;
    } else {
      throw new Error('Formato de resposta inesperado da API');
    }
  } catch (error) {
    const message =
      error?.response?.data?.message || error.message || 'Erro ao buscar usuários';
    throw new Error(message);
  }
};
