import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from '../../elements/Title/Title';
import { Context as PageContext } from '../../context/layout/Page';

export default function Header({
  home, about, lazy, memo, context, message
}) {
  return (
    <PageContext.Consumer>
      {config => (
        <header className="App-header">
          <Title text={message} />
          <Link to="/" className="header-link">
            {home}
          </Link>
          <Link to="/about" className="header-link">
            {about}
          </Link>
          <Link to="/lazy" className="header-link">
            {lazy}
          </Link>
          <Link to="/memo" className="header-link">
            {memo}
          </Link>
          <Link to="/context" className="header-link">
            {context}
          </Link>
          <button
            className="toggle-language"
            type="button"
            onClick={config.changeLanguage}
          >
            {config.i18nConfig.locale}
          </button>
        </header>
      )}
    </PageContext.Consumer>
  );
}

Header.propTypes = {
  home: PropTypes.element.isRequired,
  about: PropTypes.element.isRequired,
  lazy: PropTypes.element.isRequired,
  memo: PropTypes.element.isRequired,
  context: PropTypes.element.isRequired,
  message: PropTypes.element.isRequired
};
