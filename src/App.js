import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <h1 class="header">Catalog</h1>
        <Catalog></Catalog>
        <Footer></Footer>
    </div>
     
      
  );
}

export default App;
