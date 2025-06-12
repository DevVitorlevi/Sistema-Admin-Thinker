import React, { useEffect, useState } from 'react';
import * as S from './styles';
import DashboardCard from '../../../components/common/DashboardCard';
import { FiBook, FiHelpCircle, FiUsers } from 'react-icons/fi';

import { getMaterias } from '../../../services/materia';
import { getQuizzes } from '../../../services/quizzes';
import { getUsers } from '../../../services/users';

const Home = () => {
    const [stats, setStats] = useState({
        materias: 0,
        quizzes: 0,
        usuarios: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Função async para buscar dados
        const fetchStats = async () => {
            try {
                setLoading(true);
                const [materiasRes, quizzesRes, usuariosRes] = await Promise.all([
                    getMaterias(),
                    getQuizzes(),
                    getUsers(),
                ]);

                // Aqui, verifique se o dado esperado é um array (ajuste conforme o formato real da resposta)
                const materiasArray = Array.isArray(materiasRes) ? materiasRes : materiasRes?.data || [];
                const quizzesArray = Array.isArray(quizzesRes) ? quizzesRes : quizzesRes?.data || [];
                const usuariosArray = Array.isArray(usuariosRes) ? usuariosRes : usuariosRes?.data || [];

                setStats({
                    materias: materiasArray.length,
                    quizzes: quizzesArray.length,
                    usuarios: usuariosArray.length,
                });
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <p>Carregando dados do painel...</p>;
    }

    if (error) {
        // Corrigido: renderizando a mensagem de erro ao invés do objeto inteiro
        return <p>Erro ao carregar dados: {error.message || String(error)}</p>;
    }

    return (
        <S.DashboardContainer>
            <S.DashboardHeader>
                <h1>Bem-vindo ao Painel Administrativo</h1>
                <p>Gerencie seu conteúdo e usuários</p>
            </S.DashboardHeader>

            <S.DashboardStats>
                <DashboardCard
                    icon={<FiBook size={24} />}
                    title="Matérias"
                    value={stats.materias}
                    color="primary"
                />
                <DashboardCard
                    icon={<FiHelpCircle size={24} />}
                    title="Quizzes"
                    value={stats.quizzes}
                    color="secondary"
                />
                <DashboardCard
                    icon={<FiUsers size={24} />}
                    title="Usuários"
                    value={stats.usuarios}
                    color="warning"
                />
            </S.DashboardStats>

            <S.DashboardSection>
                <h2>Atividade Recente</h2>
                {/* Aqui você pode adicionar uma tabela ou lista de atividades recentes */}
            </S.DashboardSection>
        </S.DashboardContainer>
    );
};

export default Home;
