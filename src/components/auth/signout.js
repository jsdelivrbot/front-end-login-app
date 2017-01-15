import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
class SignOut extends Component {
  componentWillMount(){
    this.props.signoutUser();
  }
  render() {
    return (
      <div>
        <p>You are now signed out...</p>
        <p>See you next time</p>
      </div>
    );
  }
}

export default connect(null, actions)(SignOut);
