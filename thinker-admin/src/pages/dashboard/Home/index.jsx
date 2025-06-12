import React from 'react';
import * as S from './styles';
import DashboardCard from '../../../components/common/DashboardCard';
import { FiBook, FiHelpCircle, FiUsers } from 'react-icons/fi';

const Home = () => {
    // Aqui você pode buscar dados estatísticos da API
    const stats = {
        materias: 12,
        quizzes: 45,
        usuarios: 128,
    };

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