import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/layout/Page/Page';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Lazy from './components/pages/Lazy/Lazy';
import Memo from './components/pages/Memo/Memo';
import StaticContext from './components/pages/StaticContext/StaticContext';
import './scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <Router history={this.history}>
        <Page>
          <Switch>
            <Route exact strict path="/" component={Home} />
            <Route exact strict path="/about" component={About} />
            <Route exact strict path="/lazy" component={Lazy} />
            <Route exact strict path="/memo" component={Memo} />
            <Route exact strict path="/context" component={StaticContext} />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;
