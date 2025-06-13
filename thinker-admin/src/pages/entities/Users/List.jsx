import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Table from '../../../components/common/Table';
import { getUsers } from '../../../services/users';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers(); // ✅ já vem como array
                console.log('Usuários recebidos:', users); // ✅ debug
                setUsers(users);
            } catch (err) {
                setError(err.message || 'Erro ao carregar usuários.');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const columns = [
        { field: 'name', headerName: 'Nome' },
        { field: 'email', headerName: 'Email' },
        {
            field: 'role',
            headerName: 'Tipo',
            renderCell: (item) => (
                <S.UserBadge role={item.role}>
                    {item.role === 'admin' ? 'Administrador' : 'Usuário'}
                </S.UserBadge>
            )
        },
        {
            field: 'pontos',
            headerName: 'Pontos',
            renderCell: (item) => item.pontos || 0
        },
        {
            field: 'patente',
            headerName: 'Patente',
            renderCell: (item) => item.patente || 'N/A'
        },
    ];

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <S.UsersContainer>
            <S.UsersHeader>
                <h1>Usuários</h1>
            </S.UsersHeader>

            <Table
                data={users}
                columns={columns}
                emptyMessage="Nenhum usuário cadastrado"
            />
        </S.UsersContainer>
    );
};

export default UsersList;
