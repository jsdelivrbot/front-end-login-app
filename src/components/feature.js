import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        feature page...
        fetchMessage();
      </div>
    );
  }
}

export default connect(null, actions)(Feature);
