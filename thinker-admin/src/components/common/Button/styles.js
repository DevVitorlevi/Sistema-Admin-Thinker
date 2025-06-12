import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 500;
  transition: all 0.2s ease;
  
  // Variants
  background-color: ${({ theme, variant }) => theme.colors[variant] || theme.colors.primary};
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  // Sizes
  padding: ${({ size }) => 
    size === 'sm' ? '8px 12px' : 
    size === 'lg' ? '12px 24px' : 
    '10px 16px'};
  font-size: ${({ size }) => 
    size === 'sm' ? '14px' : 
    size === 'lg' ? '16px' : 
    '15px'};
  
  // Full width
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;