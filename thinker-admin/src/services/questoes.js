import api from './api';

export const getQuestoes = async () => {
  try {
    const { data } = await api.get('/questoes');
    return data.questoes;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao buscar questões';
  }
};

export const createQuestao = async (questaoData) => {
  try {
    const { data } = await api.post('/questao', questaoData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao criar questão';
  }
};

export const updateQuestao = async (id, questaoData) => {
  try {
    const { data } = await api.patch(`/questao/${id}`, questaoData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao atualizar questão';
  }
};

export const deleteQuestao = async (id) => {
  try {
    await api.delete(`/questao/${id}`);
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao excluir questão';
  }
};

export const getQuestaoById = async (id) => {
  try {
    const { data } = await api.get(`/questoes/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao buscar questão';
  }
};