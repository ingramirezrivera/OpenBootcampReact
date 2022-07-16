import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import LoginUseReducer from './components/LoginUseReducer';
import LoginUseState from './components/LoginUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UseReducer Examples</h1>
        <Counter />
        <h1> Login  Use Reducer</h1>
        <LoginUseReducer />
        <h1>Login useState</h1>
        <LoginUseState />
      </header>
    </div>
  );
}

export default App;
