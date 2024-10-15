import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginForm from './componentes/LoginForm/LoginForm';
import NavbarNoticias from './componentes/NavbarNoticias/NavbarNoticias.jsx';
import ItemNoticia from './componentes/ItemNoticia/ItemNoticia.jsx';
import ItemEditarNoticia from './componentes/ItemEditarNoticia/ItemEditarNoticia.jsx';
import ItemCrearNoticia from './componentes/ItemCrearNoticia/ItemCrearNoticia.jsx';
// import ItemCrearContacto from './componentes/ItemCrearContacto/ItemCrearContacto.jsx';
import ContactList from './componentes/ItemContactList/ContactList.jsx';
import { useSelector } from 'react-redux';


function App() {
  //const news = useSelector((state) => state.goals.value);
  const option = useSelector((state) => state.option.value);
  //const contacts = useSelector((state) => state.tasks.value);

 /* const listaItems = () => {
    if(option === 'news') {
      return (
        <>
          <ItemNoticia/>
          <ItemEditarNoticia/>
          <ItemCrearNoticia/>
        </>
      );
    } else if (option === 'contacts') {
      return (
        <>
          {/*<ItemCrearContacto/> }
          
        </>
      );
    }
  } */


  return (
    <div className="App">
      {/* <LoginForm/> */}
      <NavbarNoticias/>
      {/*<listaItems/*/}
      <ContactList/>
      
    </div>
  );
}

export default App;
