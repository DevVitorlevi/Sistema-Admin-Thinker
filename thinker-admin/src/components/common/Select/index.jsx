import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Select = ({
    label,
    value,
    onChange,
    options,
    placeholder = 'Selecione uma opção',
    required = false,
    ...props
}) => {
    return (
        <S.SelectContainer>
            {label && <S.SelectLabel>{label}{required && '*'}</S.SelectLabel>}
            <S.SelectElement
                value={value}
                onChange={onChange}
                required={required}
                {...props}
            >
                <option value="">{placeholder}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </S.SelectElement>
        </S.SelectContainer>
    );
};

Select.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

export default Select;