import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Layout = ({ children }) => {
    return (
        <S.LayoutWrapper>
            <Sidebar />
            <S.MainContent>
                <Header />
                <S.Content>{children}</S.Content>
            </S.MainContent>
        </S.LayoutWrapper>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;