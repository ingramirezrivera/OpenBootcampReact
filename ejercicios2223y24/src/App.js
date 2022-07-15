import './App.css';
import TodoFormContainer from './components/containers/TodoFormContainer';
import TodosContainer from './components/containers/TodosContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TodosContainer></TodosContainer>
      <TodoFormContainer></TodoFormContainer>
      <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
