import React from 'react';
import {Dropdown, Button, ButtonGroup,
  InputGroup, FormControl, Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home =()=>{
    return(
      <Container className="header">
      <Row>
      <Col>Logo Toko Buku</Col>
      <Col>
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">
          <Button>
          </Button>
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      </Col>
      <Col>
        <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1">Icon-Orang</Dropdown.Toggle>
        <Dropdown.Menu>

  <Dropdown.Header>SELAMAT DATANG</Dropdown.Header>
  
  <Dropdown.Item eventKey="2">
  <Link to="/login">MASUK</Link>
  </Dropdown.Item>
  
  <Dropdown.Item eventKey="3">
  <Link to="/register">BUAT AKUN</Link>
  </Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</Col>
</Row>
</Container>
    )
};
export default Home;