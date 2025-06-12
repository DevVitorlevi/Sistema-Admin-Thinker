import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Table from '../../../components/common/Table';
import { getMaterias } from '../../../services/materia';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

const MateriasList = () => {
    const [materias, setMaterias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMaterias = async () => {
            try {
                const data = await getMaterias();
                setMaterias(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMaterias();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir esta matéria?')) {
            try {
                // await deleteMateria(id);
                setMaterias(materias.filter(materia => materia._id !== id));
            } catch (err) {
                alert('Erro ao excluir matéria');
            }
        }
    };

    const columns = [
        { field: 'nome', headerName: 'Nome' },
        { field: 'descricao', headerName: 'Descrição' },
        {
            field: 'actions',
            headerName: 'Ações',
            renderCell: (item) => (
                <S.ActionsCell>
                    <Link to={`/materias/${item._id}/edit`}>
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
        <S.MateriasContainer>
            <S.MateriasHeader>
                <h1>Matérias</h1>
                <Link to="/materias/create">
                    <Button>
                        <FiPlus /> Nova Matéria
                    </Button>
                </Link>
            </S.MateriasHeader>

            <Table
                data={materias}
                columns={columns}
                emptyMessage="Nenhuma matéria cadastrada"
            />
        </S.MateriasContainer>
    );
};

export default MateriasList;