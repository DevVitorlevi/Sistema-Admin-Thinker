import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';
import { FiHome, FiBook, FiHelpCircle, FiUsers, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <S.SidebarWrapper>
            <S.SidebarHeader>
                <h2>Thinker Admin</h2>
            </S.SidebarHeader>

            <S.SidebarNav>
                <S.NavList>
                    <S.NavItem>
                        <S.NavLink to="/" end>
                            <FiHome size={20} />
                            <span>Dashboard</span>
                        </S.NavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.NavLink to="/materias">
                            <FiBook size={20} />
                            <span>Matérias</span>
                        </S.NavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.NavLink to="/quizzes">
                            <FiHelpCircle size={20} />
                            <span>Quizzes</span>
                        </S.NavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.NavLink to="/questoes">
                            <FiHelpCircle size={20} />
                            <span>Questões</span>
                        </S.NavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.NavLink to="/users">
                            <FiUsers size={20} />
                            <span>Usuários</span>
                        </S.NavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.NavLink to="/settings">
                            <FiSettings size={20} />
                            <span>Configurações</span>
                        </S.NavLink>
                    </S.NavItem>
                </S.NavList>
            </S.SidebarNav>
        </S.SidebarWrapper>
    );
};

export default Sidebar;