import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const SelectLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
export const SelectElement = styled.select`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 14px;
  transition: all 0.2s ease;
  
  background-color: white; // Corrige o fundo
  color: ${({ theme }) => theme.colors.text}; // Corrige o texto

  option {
    background-color: white; // Garante fundo das opções
    color: ${({ theme }) => theme.colors.text}; // Garante visibilidade do texto
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }
`;

