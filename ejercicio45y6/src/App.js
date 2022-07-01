import logo from './logo.svg';
import './App.css';
import ClockF from './components/container/clockF';
import Clock from './components/container/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>** Ejercicio 4,5 y 6 **</h1>
        <hr/>
        {/* <Clock></Clock> */}
        <ClockF></ClockF>
      </header>
    </div>
  );
}

export default App;
