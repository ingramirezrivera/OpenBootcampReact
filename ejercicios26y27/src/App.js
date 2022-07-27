import './App.css';
import TaskFormContainer from './components/containers/TaskFormContainer';
import TaskList from './components/pure/TaskList';
import StoreProvider from './components/Store/config/StoreProvider';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StoreProvider>
        <h1>Your Task App</h1>
        <TaskFormContainer />
        {/* <TaskList /> */}
        
      </StoreProvider>
      </header>
    </div>
  );
}

export default App;
