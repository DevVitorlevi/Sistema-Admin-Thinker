import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import * as S from './styles';
import { FiLogOut, FiUser, FiMenu } from 'react-icons/fi';

const Header = () => {
    const { admin, logout } = useContext(AuthContext);

    return (
        <S.HeaderWrapper>
            <S.HeaderLeft>
                <S.MenuButton>
                    <FiMenu size={20} />
                </S.MenuButton>
                <S.HeaderTitle>Dashboard</S.HeaderTitle>
            </S.HeaderLeft>

            <S.HeaderRight>
                <S.UserDropdown>
                    <S.UserAvatar>
                        <FiUser size={18} />
                    </S.UserAvatar>
                    <S.UserName>Admin</S.UserName>
                    <S.DropdownMenu>
                        <S.DropdownItem onClick={logout}>
                            <FiLogOut size={16} />
                            <span>Sair</span>
                        </S.DropdownItem>
                    </S.DropdownMenu>
                </S.UserDropdown>
            </S.HeaderRight>
        </S.HeaderWrapper>
    );
};

export default Header;