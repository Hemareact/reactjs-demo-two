import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function app() {
    return (
      <Container>
      <Navbar bg='secondary' expand="lg">
      
        <Navbar.Brand href="#home" text-align="center">POWER OPTIMIZER AND EFFICIENCY SYSTEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              About
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
    </Navbar>
    
     
         <Row>
        <Col >
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gumlet.assettype.com/freepressjournal/2022-01/55cc2294-d5c7-4e12-be2f-5bdf005afe2f/power_plant_4349830_960_720.webp?format=webp&w=480&dpr=2.6"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.thehansindia.com/h-upload/2020/05/04/966656-thermal-power-plants.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gettyimages.com/photos/thermal-power-plant-picture-id1131689219?s=612x612"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>   
    </Col>
           <Col> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>INTRODUCTION</Card.Title>
        <Card.Text>
          It is a system which are used in the load side demand.Every system has seperate
          voltage ceritia.In this project we have to find out where the voltage get drop
          and comprise that.  
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
      <Row> 
        <div className="bg-secondary border p-5 text-center"> Some of the services which are considered in POES are given below </div> 
    </Row>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
        <Card.Title>System model considered</Card.Title>
        <Card.Text>
        The model system used , where a primary load of 157kwh/d, 22kW peak is connected to the AC bus.  
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Service</Card.Title>
        <Card.Text>
        You need a service provider with extensive industry knowledge and acumen.  
   
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
      </Card>
        </Col>
     
      <Col>
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Inputs and assumptions of system model</Card.Title>
        <Card.Text>
        Where there was a peak of 8.2kW at the early hours  ... 
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
      </Card>
        </Col>
        </Row>
        <Row> 
        <div className="bg-secondary border text=center"> Email-poessre@gmail.com </div> 
    </Row>
      </Container> 
          
     
  );
}  
   
export default app;
