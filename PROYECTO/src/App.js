import logo from './logo.svg';
import './App.css';
// import Greetingf from './components/pure/Greetingf';
import GreetingStyled from './components/pure/greetingStyled'
import TaskListComponent from './components/container/task_list';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';

function App() {
  return (
    <div className="App">

        <TaskListComponent></TaskListComponent>
        <hr />
        <LoginFormik></LoginFormik>
        
    </div>
  );
}

export default App;
