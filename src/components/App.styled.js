import { styled } from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.$secondaryBgColor};
  border-radius: ${props => props.theme.$borderRadius};
  box-shadow: ${props => props.theme.$boxShadow};
`;

export const StyledTitle = styled.h1`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.$secondaryTextColor};
  text-align: center;
`;

export const StyledSmollTitle = styled.h2`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.$primiryTextColor};
  font-size: 20px;
  text-align: center;
`;
