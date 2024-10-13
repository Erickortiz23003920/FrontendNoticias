import React from 'react'; 
import { Card, Row, Col, Badge, Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemNoticia.css';

function ItemNoticia() { 
  return ( 
    <Row className='w-100 d-flex align-items-center justify-content-center'>
      <Card className="p-4 my-4 tarjeta-noticia">
        <Row className="g-0"> {/* Ajusta el espaciado de la fila */}
          
          {/* Imagen de la card */}
          <Col xs={12} md={6} className="order-md-1 order-2 "> {/* Cambia el orden en pantallas pequeñas */}
            <Card.Img
              src="/imagen-noticia.png" // imagen de la noticia
              variant="top"
              alt="Imagen de noticia"
              className="img-fluid rounded" /* Clase para hacer la imagen responsiva y con bordes redondeados */
            /> 
          </Col>

          <Col xs={12} md={6} className="order-md-2 order-1 ps-2"> {/* Ajuste de columnas y orden */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted">6 de Septiembre 2024</small>
              <Badge className="p-2 badge-categoria">Noticias Académicas</Badge>
            </div>

            <Card.Title className="mt-2 titulo-noticia"> 
              Inscripciones para el ciclo 2025
            </Card.Title> 
          </Col>

        </Row> 

        <Row> 
          {/* Contenido de la card */}
          <Col> 
            <Card.Body> 
              <Card.Text className="mt-3" style={{ fontSize: '1rem', color: '#333' }}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nunc nullam enim lectus  
                phasellus egestas quis. Adipiscing a odio tortor pellentesque odio quis pellentesque. 
              </Card.Text> 
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>Ingeniería en Sistemas</p>
            </Card.Body> 
          </Col> 
        </Row>
      </Card> 
    </Row>
  ); 
}

export default ItemNoticia;

