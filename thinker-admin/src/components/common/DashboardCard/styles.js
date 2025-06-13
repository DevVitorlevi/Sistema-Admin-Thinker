import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme }) => theme.colors.background};  // fundo escuro do tema
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 20px;

  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-left: 4px solid ${({ theme, color }) => theme.colors[color] || theme.colors.primary};
`;

export const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  /* o sufixo 20 é para alpha em hex, 20 = 12.5% de opacidade */
  background-color: ${({ theme, color }) => (theme.colors[color] || theme.colors.primary) + '20'};

  color: ${({ theme, color }) => theme.colors[color] || theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const CardValue = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
