import api from './api';

export const getQuizzes = async () => {
  try {
    const { data } = await api.get('/quizzes');
    return data.quizzes;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao buscar quizzes';
  }
};

export const createQuiz = async (quizData) => {
  try {
    const { data } = await api.post('/quiz', quizData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao criar quiz';
  }
};

export const updateQuiz = async (id, quizData) => {
  try {
    const { data } = await api.patch(`/quiz/${id}`, quizData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao atualizar quiz';
  }
};

export const deleteQuiz = async (id) => {
  try {
    await api.delete(`/quiz/${id}`);
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao excluir quiz';
  }
};

export const getQuizById = async (id) => {
  try {
    const { data } = await api.get(`/quizzes/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao buscar quiz';
  }
};