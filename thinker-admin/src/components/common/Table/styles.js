import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.background};
  
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const TableHeaderCell = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

export const EmptyMessage = styled.div`
  padding: 20px;
  text-align: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: ${({ theme }) => theme.colors.lightText};
`;

export const BadgeCell = styled.td`
  padding: 12px 16px;
  font-size: 14px;

  span {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  }
`;