import './App.css';
import NavBar from './componentes/NavBar';
import Title from './componentes/Title';
import Contador from './componentes/Contador';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Title nombre = 'Juan' edad='47'/>
      <Contador />
      <Footer />
      
    </>
   
   
  );
}

export default App;
