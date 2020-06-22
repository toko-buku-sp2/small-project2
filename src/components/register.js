import React, { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
  return { register: (data) => dispatch({ type: 'REGISTER', data }) }
}

const Register = (props) => {
  const [email, setEmail] = useState('')
  const [warningEmail, setWarningEmail] = useState('')
  const [password, setPassword] = useState('')
  const [warningPassword, setWarningPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [warningRetypePassword, setWarningRetypePassword] = useState('')
  const [address, setAddress] = useState('')
  const [warningAddress, setWarningAddress] = useState('')
  const [namaDepan, setNamaDepan] = useState('')
  const [warningNamaDepan, setWarningNamaDepan] = useState('')
  const [namaBelakang, setNamaBelakang] = useState('')
  const [warningNamaBelakang, setWarningNamaBelakang] = useState('')
  const [wa, setWa] = useState('')
  const [warningWa, setWarningWa] = useState('')
  const onSubmitSignup = () => {
    // e.preventDefault()
    props.register({
      email,
      password,
      retypePassword,
      address,
      namaDepan,
      namaBelakang,
      wa
    });
  }
  useEffect(() => {

    if (!email.includes("@")) setWarningEmail("Harus ada @-nya!");
    else if (email.length < 8) setWarningEmail("Terlalu Sedikit, Cuy!");
    else if (email.length > 20) setWarningEmail("Kepanjangan, Broh!");
    else (setWarningEmail(""))

    if (password.length < 8) setWarningPassword("Terlalu Sedikit, Cuy!");
    else if (password.length > 20) setWarningPassword("Kepanjangan, Broh!");
    else (setWarningPassword(""))

    if (wa.length < 8) setWarningWa("Terlalu Sedikit, Cuy!");
    else if (wa.length > 16) setWarningWa("Kepanjangan, Broh!");
    else (setWarningWa(""))

    retypePassword !== password ? setWarningRetypePassword("Kok beda ya?")
      : setWarningRetypePassword("");

    if (address.length < 10) setWarningAddress("Terlalu Sedikit, Cuy!");
    else if (address.length > 40) setWarningAddress("Kepanjangan, Broh!");
    else (setWarningAddress(""))

    if (namaDepan.length === 0) setWarningNamaDepan("Harus diisi ya!");
    else if (namaDepan.length > 15) setWarningNamaDepan("Kepanjangan, Broh!");
    else (setWarningNamaDepan(""))

    if (namaBelakang.length === 0) setWarningNamaBelakang("Harus diisi ya!");
    else if (namaBelakang.length > 15) setWarningNamaBelakang("Kepanjangan, Broh!");
    else (setWarningNamaBelakang(""))
  }, [
    email,
    password,
    retypePassword,
    address,
    namaDepan,
    namaBelakang,
    wa])
  return (
    <Form className = "signup" onSubmit = {()=> onSubmitSignup()}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>Nama Depan</Form.Label>
          <Form.Control onChange={(e) => setNamaDepan(e.target.value)} value={namaDepan} />
          <div style={{ color: 'red' }}>{warningNamaDepan}</div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Nama Belakang</Form.Label>
          <Form.Control onChange={(e) => setNamaBelakang(e.target.value)} value={namaBelakang} />
          <div style={{ color: 'red' }}>{warningNamaBelakang}</div>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Jalan BlahBlahBlah" onChange={(e) => setAddress(e.target.value)} value={address} />
          <div style={{ color: 'red' }}>{warningAddress}</div>
        </Form.Group>
        <Form.Group controlId="formGridPhoneNumber">
          <Form.Label>Nomor Whatsapp</Form.Label>
          <Form.Control onChange={(e) => setWa(e.target.value)} value={wa} />
          <div style={{ color: 'red' }}>{warningWa}</div>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)} value={email} />
          <div style={{ color: 'red' }}>{warningEmail}</div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} value={password} />
          <div style={{ color: 'red' }}>{warningPassword}</div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Re-Type Password</Form.Label>
          <Form.Control type="password" placeholder="Re-Type Password"
            onChange={(e) => setRetypePassword(e.target.value)} value={retypePassword} />
          <div style={{ color: 'red' }}>{warningRetypePassword}</div>
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
  </Button>
</Form >
)}

export default connect(null, mapDispatchToProps)(Register)