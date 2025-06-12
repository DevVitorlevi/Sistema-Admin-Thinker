import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const DashboardCard = ({ icon, title, value, color }) => {
    return (
        <S.CardWrapper color={color}>
            <S.CardIcon>{icon}</S.CardIcon>
            <S.CardContent>
                <S.CardTitle>{title}</S.CardTitle>
                <S.CardValue>{value}</S.CardValue>
            </S.CardContent>
        </S.CardWrapper>
    );
};

DashboardCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning']),
};

DashboardCard.defaultProps = {
    color: 'primary',
};

export default DashboardCard;