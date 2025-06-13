import styled from 'styled-components';

// Container geral, fundo escuro
export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

// Card com fundo escuro, bordas arredondadas e sombra
export const RegisterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.border}; // tom escuro intermediário
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 40px;
  width: 100%;
  max-width: 450px;
  color: ${({ theme }) => theme.colors.text};
`;

// Cabeçalho do formulário
export const RegisterHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

// Formulário com gap entre os campos
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Input estilizado com borda e foco personalizado
export const Input = styled.input`
  padding: 12px 16px;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

// Botão principal estilizado
export const SubmitButton = styled.button`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}cc; // mais opaco no hover
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

// Mensagem de erro centralizada e em vermelho
export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
`;

// Link para login, abaixo do formulário
export const LoginLink = styled.div`
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightText};
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
