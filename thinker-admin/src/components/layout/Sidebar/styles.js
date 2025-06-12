import styled from "/node_modules/.vite/deps/styled-components.js?v=efd89de0";
import { NavLink as RouterNavLink } from "/node_modules/.vite/deps/react-router-dom.js?v=efd89de0";

export const SidebarWrapper = styled.aside`
  width: 240px;
  background-color: white;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
`;

export const SidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SidebarNav = styled.nav`
  flex: 1;
  padding: 16px 0;
  overflow-y: auto;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NavItem = styled.li`
  margin: 0 8px;
`;

export const NavLink = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &.active {
    background-color: ${({ theme }) => theme.colors.primary}10;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
  
  span {
    flex: 1;
  }
`;
