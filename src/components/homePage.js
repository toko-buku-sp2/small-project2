import React from 'react';
import {Dropdown, Button, ButtonGroup,
  InputGroup, FormControl, 
  Container,Row,Col,Tabs,Tab,Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home =()=>{
    return(
      <Container className="header">
      <Row>
      <Col>Logo Toko Buku</Col>
      <Col>
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Cari Buku"
          aria-label="Search Book"
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
<Row>
<Tabs defaultActiveKey="book">
  <Tab eventKey="bookList" title="SEMUA KOLEKSI BUKU">
    
  </Tab>
  <Tab eventKey="bookList" title="BUKU BARU">
    
  </Tab>
  <Tab eventKey="bookList" title="BUKU PILIHAN">
    
  </Tab>
    <Tab eventKey="bookList" title="NATIONAL BEST SELLER">
    
  </Tab>
  <Tab eventKey="bookList" title="BUKU IMPORT">
    
  </Tab>
  <Tab eventKey="bookList" title="SALE">
    
  </Tab>
</Tabs>
</Row>
<Row>
<Col>Produk Original & Terjamin</Col>
<Col>Gratis Pengiriman</Col>
<Col>Gratis Pengembalian</Col>
</Row>
<Row>
<Carousel as={Col}>
      <Carousel.Item>
        <img
          className="gambar-slide"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355731828l/17086390.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="gambar-slide"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355731828l/17086390.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="gambar-slide"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355731828l/17086390.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Row>
</Container>


    )
};
export default Home;