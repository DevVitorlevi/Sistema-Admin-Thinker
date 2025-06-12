import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import { getQuizById, updateQuiz } from '../../../services/quizzes';
import { getMaterias } from '../../../services/materias';

const QuizzesEdit = () => {
    const { id } = useParams();
    const [titulo, setTitulo] = useState('');
    const [materiaId, setMateriaId] = useState('');
    const [tempoEstimado, setTempoEstimado] = useState('');
    const [materias, setMaterias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [quizData, materiasData] = await Promise.all([
                    getQuizById(id),
                    getMaterias()
                ]);

                setTitulo(quizData.titulo);
                setMateriaId(quizData.materia?._id || '');
                setTempoEstimado(quizData.tempo_estimado || '');
                setMaterias(materiasData);
            } catch (err) {
                setError(err.message || 'Erro ao carregar dados');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await updateQuiz(id, {
                titulo,
                materiaId,
                tempo_estimado: tempoEstimado
            });
            navigate('/quizzes');
        } catch (err) {
            setError(err.message || 'Erro ao atualizar quiz');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Carregando...</div>;

    return (
        <S.QuizzesContainer>
            <S.QuizzesHeader>
                <h1>Editar Quiz</h1>
            </S.QuizzesHeader>

            <S.QuizzesForm onSubmit={handleSubmit}>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

                <Input
                    label="Título"
                    placeholder="Digite o título do quiz"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />

                <Select
                    label="Matéria"
                    value={materiaId}
                    onChange={(e) => setMateriaId(e.target.value)}
                    options={materias.map(materia => ({
                        value: materia._id,
                        label: materia.nome
                    }))}
                    required
                />

                <Input
                    label="Tempo Estimado (minutos)"
                    type="number"
                    placeholder="Digite o tempo estimado"
                    value={tempoEstimado}
                    onChange={(e) => setTempoEstimado(e.target.value)}
                />

                <S.FormActions>
                    <Button
                        type="button"
                        variant="danger"
                        onClick={() => navigate('/quizzes')}
                    >
                        Cancelar
                    </Button>
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : 'Salvar'}
                    </Button>
                </S.FormActions>
            </S.QuizzesForm>
        </S.QuizzesContainer>
    );
};

export default QuizzesEdit;