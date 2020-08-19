import React, { Component } from 'react';
import StaticContextView from './StaticContextView';
import messages from './StaticContext.i18n';
import { Context, data } from '../../context/pages/StaticContext';

export default class StaticContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...data
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <StaticContextView
          messages={messages}
        />
      </Context.Provider>
    );
  }
}
