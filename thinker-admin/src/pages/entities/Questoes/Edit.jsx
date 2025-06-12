import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import { getQuestaoById, updateQuestao } from '../../../services/questoes';
import { getQuizzes } from '../../../services/quizzes';

const QuestoesEdit = () => {
    const { id } = useParams();
    const [pergunta, setPergunta] = useState('');
    const [alternativas, setAlternativas] = useState(['', '', '', '']);
    const [respostaCorreta, setRespostaCorreta] = useState('');
    const [quizId, setQuizId] = useState('');
    const [dificuldade, setDificuldade] = useState('medio');
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [questaoData, quizzesData] = await Promise.all([
                    getQuestaoById(id),
                    getQuizzes()
                ]);

                setPergunta(questaoData.pergunta);
                setAlternativas(questaoData.alternativas);
                setRespostaCorreta(questaoData.respostaCorreta);
                setQuizId(questaoData.quiz?._id || '');
                setDificuldade(questaoData.dificuldade || 'medio');
                setQuizzes(quizzesData);
            } catch (err) {
                setError(err.message || 'Erro ao carregar dados');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleAlternativaChange = (index, value) => {
        const newAlternativas = [...alternativas];
        newAlternativas[index] = value;
        setAlternativas(newAlternativas);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Validar alternativas
        const validAlternativas = alternativas.filter(a => a.trim() !== '');
        if (validAlternativas.length < 2) {
            setError('É necessário pelo menos 2 alternativas');
            setLoading(false);
            return;
        }

        if (!respostaCorreta || !validAlternativas.includes(respostaCorreta)) {
            setError('Selecione uma resposta correta válida');
            setLoading(false);
            return;
        }

        try {
            await updateQuestao(id, {
                pergunta,
                alternativas: validAlternativas,
                respostaCorreta,
                quizId,
                dificuldade
            });
            navigate('/questoes');
        } catch (err) {
            setError(err.message || 'Erro ao atualizar questão');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Carregando...</div>;

    return (
        <S.QuestoesContainer>
            <S.QuestoesHeader>
                <h1>Editar Questão</h1>
            </S.QuestoesHeader>

            <S.QuestoesForm onSubmit={handleSubmit}>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

                <Select
                    label="Quiz"
                    value={quizId}
                    onChange={(e) => setQuizId(e.target.value)}
                    options={quizzes.map(quiz => ({
                        value: quiz._id,
                        label: quiz.titulo
                    }))}
                    required
                />

                <Input
                    label="Pergunta"
                    placeholder="Digite a pergunta"
                    value={pergunta}
                    onChange={(e) => setPergunta(e.target.value)}
                    required
                    textarea
                    rows={3}
                />

                <S.AlternativasContainer>
                    <label>Alternativas</label>
                    {alternativas.map((alt, index) => (
                        <S.AlternativaItem key={index}>
                            <Input
                                placeholder={`Alternativa ${index + 1}`}
                                value={alt}
                                onChange={(e) => handleAlternativaChange(index, e.target.value)}
                            />
                            <S.RadioInput
                                type="radio"
                                name="respostaCorreta"
                                checked={respostaCorreta === alt}
                                onChange={() => setRespostaCorreta(alt)}
                                disabled={!alt.trim()}
                            />
                        </S.AlternativaItem>
                    ))}
                </S.AlternativasContainer>

                <Select
                    label="Dificuldade"
                    value={dificuldade}
                    onChange={(e) => setDificuldade(e.target.value)}
                    options={[
                        { value: 'facil', label: 'Fácil' },
                        { value: 'medio', label: 'Médio' },
                        { value: 'dificil', label: 'Difícil' }
                    ]}
                    required
                />

                <S.FormActions>
                    <Button
                        type="button"
                        variant="danger"
                        onClick={() => navigate('/questoes')}
                    >
                        Cancelar
                    </Button>
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : 'Salvar'}
                    </Button>
                </S.FormActions>
            </S.QuestoesForm>
        </S.QuestoesContainer>
    );
};

export default QuestoesEdit;