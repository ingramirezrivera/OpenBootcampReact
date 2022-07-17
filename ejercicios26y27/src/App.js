import './App.css';
import TaskList from './components/containers/TasksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks App</h1>
        <TaskList />
      </header>
    </div>
  );
}

export default App;
