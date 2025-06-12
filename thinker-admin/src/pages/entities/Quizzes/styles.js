import styled from 'styled-components';

export const QuizzesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const QuizzesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const QuizzesForm = styled.form`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;

export const ActionsCell = styled.div`
  display: flex;
  gap: 8px;
`;