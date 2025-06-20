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

    const [recentActivities, setRecentActivities] = useState({
        materias: [],
        quizzes: [],
        usuarios: [],
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStatsAndRecent = async () => {
            try {
                setLoading(true);

                const [materiasRes, quizzesRes, usuariosRes] = await Promise.all([
                    getMaterias(),
                    getQuizzes(),
                    getUsers(),
                ]);

                // Ajuste para pegar dados caso venha num objeto { data: [...] }
                const materiasArray = Array.isArray(materiasRes) ? materiasRes : materiasRes?.data || [];
                const quizzesArray = Array.isArray(quizzesRes) ? quizzesRes : quizzesRes?.data || [];
                const usuariosArray = Array.isArray(usuariosRes) ? usuariosRes : usuariosRes?.data || [];

                setStats({
                    materias: materiasArray.length,
                    quizzes: quizzesArray.length,
                    usuarios: usuariosArray.length,
                });

                // Pega as 5 últimas atividades - pode ajustar conforme sua necessidade
                setRecentActivities({
                    materias: materiasArray.slice(-5).reverse(), // últimos 5 matérias
                    quizzes: quizzesArray.slice(-5).reverse(),
                    usuarios: usuariosArray.slice(-5).reverse(),
                });
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStatsAndRecent();
    }, []);

    if (loading) {
        return <p>Carregando dados do painel...</p>;
    }

    if (error) {
        return <p>Erro ao carregar dados: {error.message || String(error)}</p>;
    }

    return (
        <S.DashboardContainer>
            <S.DashboardHeader>
                <h1>Bem-vindo ao Painel Administrativo Do Thinker</h1>
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

                <S.ActivityGroup>
                    <h3>Últimos Quizzes</h3>
                    <ul>
                        {recentActivities.quizzes.length === 0 && <li>Nenhum quiz recente</li>}
                        {recentActivities.quizzes.map((q) => (
                            <li key={q._id}>{q.titulo}</li>
                        ))}
                    </ul>
                </S.ActivityGroup>

                <S.ActivityGroup>
                    <h3>Últimos Usuários</h3>
                    <ul>
                        {recentActivities.usuarios.length === 0 && <li>Nenhum usuário recente</li>}
                        {recentActivities.usuarios.map((u) => (
                            <li key={u._id}>{u.nome || u.username || u.email}</li>
                        ))}
                    </ul>
                </S.ActivityGroup>

            </S.DashboardSection>
        </S.DashboardContainer>
    );
};

export default Home;
