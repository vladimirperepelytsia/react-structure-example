import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './Page.i18n';
import Header from '../Header/Header';


export default function PageView({ children }) {
  return (
    <div className="App">
      <Header
        home={<FormattedMessage {...messages.home} />}
        about={<FormattedMessage {...messages.about} />}
        lazy={<FormattedMessage {...messages.lazy} />}
        memo={<FormattedMessage {...messages.memo} />}
        context={<FormattedMessage {...messages.context} />}
        message={<FormattedMessage {...messages.welcome} />}
      />
      {children}
    </div>
  );
}

PageView.propTypes = {
  children: PropTypes.element.isRequired
};
