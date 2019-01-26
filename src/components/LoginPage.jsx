import LoginForm from '../forms/LoginForm';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class LoginPage extends Component {
  submit = data =>  {
    return this.props.login(data).then(() => this.props.history.push("/dashboard"));  
  }

  render() {
    return (
      <div>
        <h1>Login page</h1>

        <LoginForm submit={this.submit} />

        <Link to="/forgot_password">Forgot Password?</Link>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);

// mapstatetoprops=> to pass some data from redux state to this Component
// we dont want any


// mapdispatchtoprops=> just provide object with the functions that want
// to wrap in dispatch call so we will have login here
