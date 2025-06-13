import React from 'react';
import * as S from './styles';
import { FiHome, FiBook, FiHelpCircle, FiUsers } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <S.SidebarWrapper>
            <S.SidebarHeader>
                <h2>Thinker Admin</h2>
            </S.SidebarHeader>

            <S.SidebarNav>
                <S.NavList>
                    <S.NavItem>
                        <S.StyledNavLink to="/" end>
                            <FiHome size={20} />
                            <span>Dashboard</span>
                        </S.StyledNavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.StyledNavLink to="/materias">
                            <FiBook size={20} />
                            <span>Matérias</span>
                        </S.StyledNavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.StyledNavLink to="/quizzes">
                            <FiHelpCircle size={20} />
                            <span>Quizzes</span>
                        </S.StyledNavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.StyledNavLink to="/questoes">
                            <FiHelpCircle size={20} />
                            <span>Questões</span>
                        </S.StyledNavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.StyledNavLink to="/users">
                            <FiUsers size={20} />
                            <span>Usuários</span>
                        </S.StyledNavLink>
                    </S.NavItem>

                    <S.NavItem>
                        <S.StyledNavLink to="/register">
                            <FiUsers size={20} />
                            <span>Registrar Admin</span>
                        </S.StyledNavLink>
                    </S.NavItem>
                </S.NavList>
            </S.SidebarNav>
        </S.SidebarWrapper>
    );
};

export default Sidebar;
