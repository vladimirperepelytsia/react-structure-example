import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function MemoComponent({
  title, production, poster, messages
}) {
  console.log('RENDER MEMO COMPONENT'); //eslint-disable-line
  return (
    <div className="info">
      <p className="App-intro">
        <FormattedMessage {...messages.title} />
        &nbsp;
        {title}
      </p>
      <p className="App-intro">
        <FormattedMessage {...messages.production} />
        &nbsp;
        {production}
      </p>
      <img
        className="App-banner"
        src={poster}
        alt={title}
      />
    </div>
  );
}

export default React.memo(
  MemoComponent
);

MemoComponent.propTypes = {
  title: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    production: PropTypes.string.isRequired
  }).isRequired
};
