import api from './api';

export const getMaterias = async () => {
  try {
    const { data } = await api.get('/materias');
    return data.materias;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao buscar matérias';
  }
};

export const createMateria = async (materiaData) => {
  try {
    const { data } = await api.post('/materia', materiaData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao criar matéria';
  }
};

export const updateMateria = async (id, materiaData) => {
  try {
    const { data } = await api.patch(`/materia/${id}`, materiaData);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao atualizar matéria';
  }
};

export const deleteMateria = async (id) => {
  try {
    await api.delete(`/materia/${id}`);
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao excluir matéria';
  }
};

export const getMateriaById = async (id) => {
  try {
    const { data } = await api.get(`/materias/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao buscar matéria';
  }
};