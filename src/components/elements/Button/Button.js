import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ title, buttonClass, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClass}
    >
      { title }
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.element.isRequired,
  buttonClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
