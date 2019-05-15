import React,  { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      name,
      label,
      type,
      handleChange,
      title
    } = this.props;

    return (
      <div className="form-group row">
        <label
          htmlFor={name} className="col-sm-2 col-form-label">{label}
        </label>
        <div className="col-sm-10">
          <input 
            type={type}
            className="form-control"
            name={name}
            id={name}
            value={title}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  title: PropTypes.string,
}

export default Input;