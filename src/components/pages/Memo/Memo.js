import React, { Component } from 'react';
import MemoView from './MemoView';
import messages from './Memo.i18n';

export default class Memo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0,
      title: 'John Carter',
      production: 'Walt Disney Pictures',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDEwZmIzNjYtNjUwNS00MzgzLWJiO'
        + 'GYtZWMxZGQ5NDcxZjUwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
    };
  }

  handleClick = () => {
    const { clickCounter } = this.state;
    this.setState({
      clickCounter: clickCounter + 1
    });
  }

  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    const {
      clickCounter, title, production, poster
    } = this.state;
    return (
      <MemoView
        title={title}
        production={production}
        poster={poster}
        clickCounter={clickCounter}
        handleClick={this.handleClick}
        changeTitle={this.changeTitle}
        messages={messages}
      />
    );
  }
}
