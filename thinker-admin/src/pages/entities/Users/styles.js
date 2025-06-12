import styled from 'styled-components';

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const UsersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const UserBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${({ theme, role }) => 
    role === 'admin' ? theme.colors.primary : theme.colors.secondary}20;
  color: ${({ theme, role }) => 
    role === 'admin' ? theme.colors.primary : theme.colors.secondary};
`;