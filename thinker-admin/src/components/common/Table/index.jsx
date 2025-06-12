import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Table = ({ data, columns, emptyMessage }) => {
    if (data.length === 0) {
        return <S.EmptyMessage>{emptyMessage}</S.EmptyMessage>;
    }

    return (
        <S.TableWrapper>
            <S.TableHeader>
                <tr>
                    {columns.map((column) => (
                        <S.TableHeaderCell key={column.field}>
                            {column.headerName}
                        </S.TableHeaderCell>
                    ))}
                </tr>
            </S.TableHeader>

            <S.TableBody>
                {data.map((item) => (
                    <tr key={item._id}>
                        {columns.map((column) => (
                            <S.TableCell key={`${item._id}-${column.field}`}>
                                {column.renderCell
                                    ? column.renderCell(item)
                                    : item[column.field]}
                            </S.TableCell>
                        ))}
                    </tr>
                ))}
            </S.TableBody>
        </S.TableWrapper>
    );
};

Table.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            field: PropTypes.string.isRequired,
            headerName: PropTypes.string.isRequired,
            renderCell: PropTypes.func,
        })
    ).isRequired,
    emptyMessage: PropTypes.string,
};

Table.defaultProps = {
    emptyMessage: 'Nenhum dado encontrado',
};

export default Table;