import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {


  return (
    <main>
      <header>
        <h1>
          <a href="#">
            TIENDA
          </a>
        </h1>
        <nav>
          <Navbar />
        </nav>
      </header>
    <section className='description'>
      <ItemListContainer greeting="TIENDA EN CONSTRUCCIÓN, disculpe las molestias." />
    </section>
    <footer>© TIENDA 2023 - Todos los derechos reservados.</footer>
      
    </main>
    
  )
}

export default App
