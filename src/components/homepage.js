import React from 'react';
import {Dropdown, ButtonGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home =()=>{
    return(
        <div>
        <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1">Ikon</Dropdown.Toggle>
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
</div>
    )
};
export default Home;