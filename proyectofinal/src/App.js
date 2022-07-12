import logo from './logo.svg';
import './App.css';
import AsyncExample from './components/pure/AsyncExample';
import Observableexample from './components/pure/ObservableExample';
import Fetchexample from './components/pure/FetchExample';
import Axioscrudexample from './components/pure/AxiosCRUDExample';

function App() {
  return (
    <div className="App">
      {/* <AsyncExample />
      <Observableexample />
      <Fetchexample />
      <Axiosexample/> */}
      <Axioscrudexample />
    </div>
  );
}

export default App;
