import { styled } from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
`;

export const StyledInput = styled.input`
  padding: 5px;
  border: ${props => props.theme.input.$border};
  border-radius: ${props => props.theme.input.$borderRadius};
  border-radius: 4px;
`;
