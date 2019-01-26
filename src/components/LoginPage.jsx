import React from 'react'
import LoginForm from '../forms/LoginForm';

import React, { Component } from 'react'
import {connect} from 'react-redux'
import { login } from '../../actions/auth'

class LoginPage extends Component {

  render() {
    submit = (data) => {
        this.props.login(data).then(()=>{
            this.props.history.push("/login")
        })
    };

    return (
      <div>
        <h1>Login</h1>
        <LoginForm submit={this.submit} />
      </div>
    )
  }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.string.isRequired,
    }),
    login: PropTypes.func.isRequired,
}

export default connect(null, { login })(LoginPage)

// mapstatetoprops=> to pass some data from redux state to this Component
// we dont want any


// mapdispatchtoprops=> just provide object with the functions that want
// to wrap in dispatch call so we will have login here
