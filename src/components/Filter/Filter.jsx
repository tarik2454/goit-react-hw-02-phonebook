import PropTypes from 'prop-types';

import { StyledLabel, StyledInput } from './Filter.styled';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <StyledLabel>
      Find contacts by name:
      <StyledInput type="text" value={value} onChange={onFilterChange} />
    </StyledLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
