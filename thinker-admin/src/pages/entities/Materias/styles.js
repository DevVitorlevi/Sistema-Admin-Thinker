import styled from 'styled-components';

export const MateriasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MateriasHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ActionsCell = styled.div`
  display: flex;
  gap: 8px;
`;

export const MateriasForm = styled.form`
  background-color: ${({ theme }) => theme.colors.border}; // fundo escuro intermediário
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows.lg}; // sombra mais evidente no dark
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
