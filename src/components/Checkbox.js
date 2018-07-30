import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = props => {
  const { name, title, onChange, checked } = props;
  return (
    <div className="form-input">
      <div className="input-label">
        <label htmlFor={name}>{title}</label>
      </div>
      <label className="myCheckbox">
        <input
          name={name}
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <span />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;