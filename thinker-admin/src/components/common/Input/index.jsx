import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Input = ({
    label,
    placeholder,
    value,
    onChange,
    type = 'text',
    textarea = false,
    rows = 3,
    required = false,
    ...props
}) => {
    return (
        <S.InputContainer>
            {label && <S.InputLabel>{label}{required && '*'}</S.InputLabel>}
            {textarea ? (
                <S.Textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={rows}
                    required={required}
                    {...props}
                />
            ) : (
                <S.Input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    {...props}
                />
            )}
        </S.InputContainer>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    textarea: PropTypes.bool,
    rows: PropTypes.number,
    required: PropTypes.bool,
};

export default Input;