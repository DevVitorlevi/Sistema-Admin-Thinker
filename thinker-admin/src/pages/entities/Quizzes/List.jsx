import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Table from '../../../components/common/Table';
import { getQuizzes } from '../../../services/quizzes';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

const QuizzesList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const data = await getQuizzes();
                setQuizzes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir este quiz?')) {
            try {
                // await deleteQuiz(id);
                setQuizzes(quizzes.filter(quiz => quiz._id !== id));
            } catch (err) {
                alert('Erro ao excluir quiz');
            }
        }
    };

    const columns = [
        { field: 'titulo', headerName: 'Título' },
        {
            field: 'materia',
            headerName: 'Matéria',
            renderCell: (item) => item.materia?.nome || 'N/A'
        },
        {
            field: 'questoes',
            headerName: 'Questões',
            renderCell: (item) => item.questoes?.length || 0
        },
        {
            field: 'actions',
            headerName: 'Ações',
            renderCell: (item) => (
                <S.ActionsCell>
                    <Link to={`/quizzes/${item._id}/edit`}>
                        <Button variant="secondary" size="sm">
                            <FiEdit2 />
                        </Button>
                    </Link>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(item._id)}
                    >
                        <FiTrash2 />
                    </Button>
                </S.ActionsCell>
            ),
        },
    ];

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <S.QuizzesContainer>
            <S.QuizzesHeader>
                <h1>Quizzes</h1>
                <Link to="/quizzes/create">
                    <Button>
                        <FiPlus /> Novo Quiz
                    </Button>
                </Link>
            </S.QuizzesHeader>

            <Table
                data={quizzes}
                columns={columns}
                emptyMessage="Nenhum quiz cadastrado"
            />
        </S.QuizzesContainer>
    );
};

export default QuizzesList;