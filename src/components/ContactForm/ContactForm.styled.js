import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  padding: 5px;
  border: ${props => props.theme.input.$border};
  border-radius: ${props => props.theme.$borderRadius};
  border-radius: ${props => props.theme.input.$borderRadius};
`;

export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  border-radius: 4px;
  color: ${props => props.theme.colors.$white};
  background-color: ${props => props.theme.colors.$accentColor};
`;
