import React from 'react'; 
import { Navbar, Nav, Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./NavbarNoticias.css";
  

function NavbarNoticias() { 
  return ( 
    <Navbar bg="white" expand="lg" className="shadow-sm py-2 "> 

      <Container fluid> 
        <Row className="w-100 align-items-center"> 
          {/* Logo centrado en pantallas pequeñas, alineado a la izquierda en pantallas grandes */} 
          <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-start mb-2 mb-md-0"> 
            <Navbar.Brand href="#"> 
              <img 
                src="/logo-noslogan.png"
                alt="Logo universidad galileo" 
                style={{ maxHeight: '70px' }}
              /> 
            </Navbar.Brand> 
          </Col> 


          {/* Botones centrados */} 
          <Col xs={12} md={4} className="d-flex justify-content-center mb-2 mb-md-0 custom-box-sizing">
            <ButtonGroup className="flex-wrap "> 
              <Button variant="outline-secondary" className='NavbarButtons btn-lg' href="#noticias"> 
                Noticias 
              </Button> 
              <Button variant="outline-secondary" className='NavbarButtons btn-lg' href="#contactos"> 
                Contactos 
              </Button> 
            </ButtonGroup> 
          </Col> 


          {/* Espacio derecho en pantallas grandes */} 
          <Col xs={12} md={4}></Col> 
        </Row> 
      </Container> 
    </Navbar> 
  ); 
} 

  

export default NavbarNoticias; 

 

 