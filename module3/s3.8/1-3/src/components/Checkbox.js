import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const {
      id,
      name,
      label,
      value,
      genre,
      handleChange
    } = this.props;
    return (
      <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={id}
        onChange={handleChange}
        checked={genre.includes(value)}
      />
      <label
        htmlFor={id}>{label}</label>
    </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  genre: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func
}

export default Checkbox;