import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Table from '../../../components/common/Table';
import { getQuestoes } from '../../../services/questoes';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

const QuestoesList = () => {
    const [questoes, setQuestoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchQuestoes = async () => {
            try {
                const data = await getQuestoes();
                setQuestoes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestoes();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir esta questão?')) {
            try {
                // await deleteQuestao(id);
                setQuestoes(questoes.filter(questao => questao._id !== id));
            } catch (err) {
                alert('Erro ao excluir questão');
            }
        }
    };

    const columns = [
        {
            field: 'pergunta',
            headerName: 'Pergunta',
            renderCell: (item) => item.pergunta.substring(0, 50) + '...'
        },
        {
            field: 'quiz',
            headerName: 'Quiz',
            renderCell: (item) => item.quiz?.titulo || 'N/A'
        },
        {
            field: 'dificuldade',
            headerName: 'Dificuldade',
            renderCell: (item) => {
                const dificuldadeMap = {
                    facil: 'Fácil',
                    medio: 'Médio',
                    dificil: 'Difícil'
                };
                return dificuldadeMap[item.dificuldade] || 'N/A';
            }
        },
        {
            field: 'actions',
            headerName: 'Ações',
            renderCell: (item) => (
                <S.ActionsCell>
                    <Link to={`/questoes/${item._id}/edit`}>
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
        <S.QuestoesContainer>
            <S.QuestoesHeader>
                <h1>Questões</h1>
                <Link to="/questoes/create">
                    <Button>
                        <FiPlus /> Nova Questão
                    </Button>
                </Link>
            </S.QuestoesHeader>

            <Table
                data={questoes}
                columns={columns}
                emptyMessage="Nenhuma questão cadastrada"
            />
        </S.QuestoesContainer>
    );
};

export default QuestoesList;