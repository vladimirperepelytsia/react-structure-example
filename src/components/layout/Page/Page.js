import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import PageView from './PageView';
import {
  Context as PageContext,
  data
} from '../../context/layout/Page';

export default class Page extends Component {
  constructor(props) {
    super(props);
    const { i18nConfig } = data;
    this.state = {
      i18nConfig,
      changeLanguage: this.changeLanguage
    };
  }

  changeLanguage = () => {
    const { i18nConfig } = this.state;
    const locales = Object.keys(i18nConfig.messages);
    const nextLocaleIndex = locales.indexOf(i18nConfig.locale) + 1;
    const locale = nextLocaleIndex >= locales.length ? locales[0] : locales[nextLocaleIndex];
    this.setState({
      i18nConfig: {
        ...i18nConfig,
        locale
      }
    });
  }

  render() {
    const { children } = this.props;
    const { i18nConfig } = this.state;
    return (
      <PageContext.Provider value={{ ...this.state }}>
        <IntlProvider
          locale={i18nConfig.locale}
          key={i18nConfig.locale}
          messages={i18nConfig.messages[i18nConfig.locale]}
        >
          <PageView>
            {children}
          </PageView>
        </IntlProvider>
      </PageContext.Provider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.element.isRequired
};
