import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import MemoComponent from './MemoComponent';
import Button from '../../elements/Button/Button';


export default function MemoView({
  title, production, poster, handleClick, clickCounter, changeTitle, messages
}) {
  console.log('RENDER VIEW COMPONENT'); //eslint-disable-line
  return (
    <div className="memo">
      <MemoComponent
        title={title}
        production={production}
        poster={poster}
        messages={messages}
      />
      <div className="events">
        <p className="update">
          <FormattedMessage {...messages.likes} />
          {clickCounter}
        </p>
        <Button
          title={<FormattedMessage {...messages.like} />}
          buttonClass="update update-btn"
          handleClick={handleClick}
        />
        <input
          type="text"
          className="update"
          value={title}
          onChange={changeTitle}
        />
      </div>
    </div>
  );
}

MemoView.propTypes = {
  title: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  clickCounter: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    likes: PropTypes.string.isRequired,
    like: PropTypes.string.isRequired
  }).isRequired
};
