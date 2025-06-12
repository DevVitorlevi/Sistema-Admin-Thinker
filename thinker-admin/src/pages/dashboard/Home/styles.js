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
    color: ${({ theme }) => theme.colors.text};
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
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 16px;
  }
`;