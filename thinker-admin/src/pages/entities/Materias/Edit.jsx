import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { getMateriaById, updateMateria } from '../../../services/materia';

const MateriasEdit = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMateria = async () => {
            try {
                const materia = await getMateriaById(id);
                setNome(materia.nome);
                setDescricao(materia.descricao);
            } catch (err) {
                setError(err.message || 'Erro ao carregar matéria');
            } finally {
                setLoading(false);
            }
        };

        fetchMateria();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await updateMateria(id, { nome, descricao });
            navigate('/materias');
        } catch (err) {
            setError(err.message || 'Erro ao atualizar matéria');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Carregando...</div>;

    return (
        <S.MateriasContainer>
            <S.MateriasHeader>
                <h1>Editar Matéria</h1>
            </S.MateriasHeader>

            <S.MateriasForm onSubmit={handleSubmit}>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

                <Input
                    label="Nome"
                    placeholder="Digite o nome da matéria"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <Input
                    label="Descrição"
                    placeholder="Digite a descrição da matéria"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    textarea
                    rows={4}
                />

                <S.FormActions>
                    <Button
                        type="button"
                        variant="danger"
                        onClick={() => navigate('/materias')}
                    >
                        Cancelar
                    </Button>
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : 'Salvar'}
                    </Button>
                </S.FormActions>
            </S.MateriasForm>
        </S.MateriasContainer>
    );
};

export default MateriasEdit;