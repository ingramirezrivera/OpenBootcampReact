import logo from './logo.svg';
import './App.css';
// import Greetingf from './components/pure/Greetingf';
import GreetingStyled from './components/pure/greetingStyled'
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">

        <TaskListComponent></TaskListComponent>

    </div>
  );
}

export default App;
