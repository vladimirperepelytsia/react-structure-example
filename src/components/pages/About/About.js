import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import AboutView from './AboutView';
import messages from './About.i18n';

export default class About extends Component {
  render() {
    return (
      <AboutView
        title={<FormattedMessage {...messages.page} />}
      />
    );
  }
}
