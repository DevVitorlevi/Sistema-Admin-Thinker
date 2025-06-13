import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
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

    // react-select trabalha com objeto inteiro no value
    // então a gente adapta o value e onChange para receber só o value string

    const selectedOption = options.find(opt => opt.value === value) || null;

    const handleChange = (selected) => {
        onChange({ target: { value: selected ? selected.value : '' } });
    };

    return (
        <S.SelectContainer>
            {label && <S.SelectLabel>{label}{required && '*'}</S.SelectLabel>}
            <ReactSelect
                value={selectedOption}
                onChange={handleChange}
                options={options}
                placeholder={placeholder}
                isClearable={!required}
                {...props}
            />
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
