import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { login: state.user }
}
const mapDispatchToProps = (dispatch) => {

  return { isLogin: (data) => dispatch({ type: 'REGISTER', data }) }
}

const Login = ({ login }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitSignin = (e) => {
    if (email === login.email && password === login.password) 
    { 
      // <Link to="/list-buku"></Link>
      alert('Anda telah Login.') }
    else { alert('Anda gagal login. Email dan/atau Password salah,'); e.preventDefault()}
  }
  // const onSubmitSignin = () => {
  //   email === login.email && password === login.password ?
  //     alert('Anda telah Login.') :
  //     alert('Anda gagal login. Email dan/atau Password salah,')
  // }

  return (
    <Form onSubmit={() => onSubmitSignin()}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)