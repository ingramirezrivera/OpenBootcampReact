import logo from './logo.svg';
import './App.css';
import AsyncExample from './components/pure/AsyncExample';
import Observableexample from './components/pure/ObservableExample';
import Fetchexample from './components/pure/FetchExample';
import Axiosexample from './components/pure/AxiosExample';

function App() {
  return (
    <div className="App">
      <AsyncExample />
      <Observableexample />
      <Fetchexample />
      <Axiosexample/>
    </div>
  );
}

export default App;
