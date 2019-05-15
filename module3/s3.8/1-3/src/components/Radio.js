import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Radio extends Component {
  render() {
    const {
      id,
      name,
      label,
      handleChange,
      age
    } = this.props;
    return (
      <div>
        <input
          type="radio"
          id={id}
          name={name}
          value={label}
          onChange={handleChange}
          checked={age === label}
        />
        <label
          htmlFor={id}>{label}</label>
      </div>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  age: PropTypes.string,
  handleChange: PropTypes.func,
}

export default Radio;