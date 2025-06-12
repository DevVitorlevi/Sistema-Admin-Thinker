import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.danger};
`;

// Estilos compartilhados
const inputStyles = `
  padding: 10px 12px;
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.danger : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 14px;
  transition: all 0.2s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.danger : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme, $hasError }) => 
      ($hasError ? theme.colors.danger : theme.colors.primary) + '20'};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Textarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: ${({ rows }) => rows * 24}px;
`;
