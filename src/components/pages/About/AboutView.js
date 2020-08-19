import React from 'react';
import PropTypes from 'prop-types';


export default function AboutView({ title }) {
  return (
    <div>
      <p className="App-intro">
        {title}
      </p>
    </div>
  );
}

AboutView.propTypes = {
  title: PropTypes.element.isRequired
};
