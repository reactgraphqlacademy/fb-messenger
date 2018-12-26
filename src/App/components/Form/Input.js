import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  render() {
    const { onChange, type, placeholder, value, ...rest } = this.props;

    return (
      <input
        {...rest}
        type={type || "text"}
        placeholder={placeholder || ""}
        className="form-control"
        value={value || ""}
        onChange={e => {
          onChange && onChange(e);
        }}
      />
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string
};

export default Input;
