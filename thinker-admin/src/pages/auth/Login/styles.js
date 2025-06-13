import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

export const LoginCard = styled.div`
  background: ${({ theme }) => theme.colors.background === '#1F2937' ? '#374151' : 'white'};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 40px;
  width: 100%;
  max-width: 400px;
`;

export const LoginHeader = styled.div`
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

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
`;