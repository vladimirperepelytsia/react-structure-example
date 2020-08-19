import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ text }) {
  return (
    <h1 className="App-title">
      {text}
    </h1>
  );
}

Title.propTypes = {
  text: PropTypes.element.isRequired
};
