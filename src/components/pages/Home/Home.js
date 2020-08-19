import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import HomeView from './HomeView';
import messages from './Home.i18n';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: ''
    };
  }

  componentDidMount() {
    this.getJoke();
  }

  getJoke = () => {
    fetch('https://geek-jokes.sameerkumar.website/api').then((res) => {
      if (res.status === 200) {
        res.json().then((joke) => {
          this.setState({ information: joke });
        });
      }
    });
  }

  render() {
    const { information } = this.state;
    return (
      <HomeView
        information={information}
        getJoke={this.getJoke}
        title={<FormattedMessage {...messages.page} />}
        buttonTitle={<FormattedMessage {...messages.newJoke} />}
      />
    );
  }
}
