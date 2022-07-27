import './App.css';
import FilterContainer from './components/containers/FilterContainer';
import TaskFormContainer from './components/containers/TaskFormContainer';
import TaskListContainer from './components/containers/TaskListContainer';
import StoreProvider from './components/Store/config/StoreProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StoreProvider>
        <h1>Your Task App</h1>
        <TaskFormContainer />
        <TaskListContainer />
        <FilterContainer />
      </StoreProvider>
      </header>
    </div>
  );
}

export default App;
