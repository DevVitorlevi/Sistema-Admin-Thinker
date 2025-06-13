import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({ children, variant, size, fullWidth, ...props }) => {
    return (
        <S.ButtonWrapper
            $variant={variant}
            $size={size}
            $fullWidth={fullWidth}
            {...props}
        >
            {children}
        </S.ButtonWrapper>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    fullWidth: PropTypes.bool,
};

Button.defaultProps = {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
};

export default Button;
