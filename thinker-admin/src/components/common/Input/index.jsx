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
    error = '',
    ...props
}) => {
    const hasError = !!error;

    return (
        <S.InputContainer>
            {label && (
                <S.InputLabel>
                    {label}
                    {required && <span>*</span>}
                    {hasError && <S.ErrorText>{error}</S.ErrorText>}
                </S.InputLabel>
            )}
            {textarea ? (
                <S.Textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={rows}
                    required={required}
                    $hasError={hasError}
                    {...props}
                />
            ) : (
                <S.Input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    $hasError={hasError}
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
    error: PropTypes.string,
};

export default Input;
