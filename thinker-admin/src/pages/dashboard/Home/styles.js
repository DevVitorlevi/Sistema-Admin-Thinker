import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DashboardHeader = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 8px;
  }
  
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const DashboardStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;

export const DashboardSection = styled.section`
  background-color: ${({ theme }) => theme.colors.border}; // fundo escuro intermediário
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.lg}; // sombra mais evidente no dark
  
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 16px;
  }
`;

// Novo estilo para os grupos dentro da seção "Atividade Recente"
export const ActivityGroup = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;

    li {
      margin-bottom: 6px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.lightText};
      transition: color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
      }
    }
  }
`;
