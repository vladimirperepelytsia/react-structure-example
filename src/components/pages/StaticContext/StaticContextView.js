import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/pages/StaticContext';


export default class StaticContextView extends Component {
  componentDidMount() {
    console.log(this.context); //eslint-disable-line
  }

  static contextType = Context;

  render() {
    const { title } = this.context;
    return (
      <div className="staticContext">
        <div className="events">
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

StaticContextView.propTypes = {
  messages: PropTypes.shape({}).isRequired
};
