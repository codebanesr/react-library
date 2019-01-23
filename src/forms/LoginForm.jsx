import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator'
import InlineError from '../messages/InlineError';

export default class LoginForm extends Component {
  static propTypes = {
    prop: PropTypes
  }


  state={
      data:{
          email: '',
          password: ''
      },
      loading: false,
      errors:{}
  }


  validate = (data) => {
    const errors = {}
    if(!data.password){
        errors.password = "cant be blank"

    }
    if(!Validator.isEmail(data.email)){
        errors.email = "invalid email"
    }
    return errors
  }


  onChange = e => {
      this.setState({
          data: {...this.state.data, [e.target.name]: e.target.value }
      })
  }



  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
  }

  render() {
    const {data, errors} = this.state;
    return (
        <Form onSubmit={this.onSubmit}>
            <Form.Field>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email@email.com" id="email" value={data.email} onChange={this.onChange}/>
                {errors.email && <InlineError text={errors.email} />}
            </Form.Field>


            <Form.Field>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={this.onChange} placeholder="Secure password" />
                {errors.password && <InlineError text={errors.password} />}
            </Form.Field>
            <Button primary>Login</Button>
        </Form>
    )
  }
}
