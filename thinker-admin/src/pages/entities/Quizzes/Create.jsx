import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import { createQuiz } from '../../../services/quizzes';
import { getMaterias } from '../../../services/materia';

const QuizzesCreate = () => {
    const [titulo, setTitulo] = useState('');
    const [materiaId, setMateriaId] = useState('');
    const [materias, setMaterias] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMaterias = async () => {
            try {
                const data = await getMaterias();
                setMaterias(data);
            } catch (err) {
                setError(err.message || 'Erro ao carregar matérias');
            }
        };

        fetchMaterias();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await createQuiz({ titulo, materiaId });
            navigate('/quizzes');
        } catch (err) {
            setError(err.message || 'Erro ao criar quiz');
        } finally {
            setLoading(false);
        }
    };

    return (
        <S.QuizzesContainer>
            <S.QuizzesHeader>
                <h1>Criar Novo Quiz</h1>
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

export default QuizzesCreate;