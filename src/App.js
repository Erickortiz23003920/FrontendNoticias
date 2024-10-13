import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Badge, Container } from 'react-bootstrap'; 
import LoginForm from './componentes/LoginForm/LoginForm';
import NavbarNoticias from './componentes/NavbarNoticias/NavbarNoticias.jsx';
import ItemNoticia from './componentes/ItemNoticia/ItemNoticia.jsx';
import ItemEditarNoticia from './componentes/ItemEditarNoticia/ItemEditarNoticia.jsx';
import ItemCrearNoticia from './componentes/ItemCrearNoticia/ItemCrearNoticia.jsx';

function App() {
  return (
    <div className="App">
      {/* <LoginForm/> */}
      <NavbarNoticias/>
      <ItemNoticia></ItemNoticia>
      <ItemEditarNoticia></ItemEditarNoticia>
      <ItemCrearNoticia></ItemCrearNoticia>

    </div>
  );
}

export default App;
