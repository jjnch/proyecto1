import './App.css';
import NavBar from './componentes/NavBar';
import Contenido from './componentes/Contenido';
import Contador from './componentes/Contador';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Contenido nombre = 'Juan' edad='47'/>
      <Contador />
      <Footer />
      
    </>
   
   
  );
}

export default App;
