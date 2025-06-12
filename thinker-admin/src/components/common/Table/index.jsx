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
                        <S.TableHeaderCell
                            key={column.field}
                            width={column.width}
                            align={column.align}
                        >
                            {column.headerName}
                        </S.TableHeaderCell>
                    ))}
                </tr>
            </S.TableHeader>

            <S.TableBody>
                {data.map((item) => (
                    <tr key={item._id}>
                        {columns.map((column) => {
                            const cellContent = column.renderCell
                                ? column.renderCell(item)
                                : item[column.field];

                            if (column.badge) {
                                return (
                                    <S.BadgeCell
                                        key={`${item._id}-${column.field}`}
                                        align={column.align}
                                    >
                                        <S.Badge
                                            backgroundColor={column.badge.backgroundColor(item)}
                                            color={column.badge.color(item)}
                                        >
                                            {cellContent}
                                        </S.Badge>
                                    </S.BadgeCell>
                                );
                            }

                            return (
                                <S.TableCell
                                    key={`${item._id}-${column.field}`}
                                    width={column.width}
                                    align={column.align}
                                >
                                    {cellContent}
                                </S.TableCell>
                            );
                        })}
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
            width: PropTypes.string,
            align: PropTypes.oneOf(['left', 'center', 'right']),
            renderCell: PropTypes.func,
            badge: PropTypes.shape({
                backgroundColor: PropTypes.func,
                color: PropTypes.func,
            }),
        })
    ).isRequired,
    emptyMessage: PropTypes.string,
};

Table.defaultProps = {
    emptyMessage: 'Nenhum dado encontrado',
};

export default Table;