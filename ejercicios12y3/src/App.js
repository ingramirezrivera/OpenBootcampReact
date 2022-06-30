import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/container/ComponenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Contacto</h1>
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
