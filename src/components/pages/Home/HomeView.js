import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../elements/Button/Button';
import Loader from '../../elements/Loader/Loader';

export default function HomeView({
  information, getJoke, title, buttonTitle
}) {
  return (
    <div>
      <p className="App-intro">
        {title}
      </p>
      {information
        ? (
          <p>
            {information}
          </p>
        ) : (
          <Loader />
        )
      }
      <Button
        title={buttonTitle}
        buttonClass="update-joke"
        handleClick={getJoke}
      />
    </div>
  );
}

HomeView.propTypes = {
  information: PropTypes.string.isRequired,
  getJoke: PropTypes.func.isRequired,
  title: PropTypes.element.isRequired,
  buttonTitle: PropTypes.element.isRequired
};
