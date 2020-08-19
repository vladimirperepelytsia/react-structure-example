import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import LazyView from './LazyView';
import messages from './Lazy.i18n';

export default class Lazy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {},
      search: '',
      loading: false
    };
  }

  getFilm = () => {
    const { search } = this.state;
    this.setState({ loading: true });
    fetch(`http://www.omdbapi.com/?apikey=3db238d1&t=${search}`).then((res) => {
      if (res.status === 200) {
        res.json().then((film) => {
          this.setState({
            information: film,
            loading: false
          });
        });
      }
    });
  }

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    const { information, loading, search } = this.state;
    return (
      <LazyView
        information={information}
        getFilm={this.getFilm}
        title={<FormattedMessage {...messages.page} />}
        buttonTitle={<FormattedMessage {...messages.search} />}
        loading={loading}
        search={search}
        handleSearch={this.handleSearch}
      />
    );
  }
}
