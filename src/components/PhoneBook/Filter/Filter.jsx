import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function Filter({ filter, handleChange }) {
  const filterID = nanoid();
  return (
    <>
      <label htmlFor={filterID}>Find contacts by name</label>
      <input
        id={filterID}
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
      />
    </>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
