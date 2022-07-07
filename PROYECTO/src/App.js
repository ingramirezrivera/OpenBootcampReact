import logo from './logo.svg';
import './App.css';
// import Greetingf from './components/pure/Greetingf';
import GreetingStyled from './components/pure/greetingStyled'
import TaskListComponent from './components/container/task_list';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">

        <TaskListComponent></TaskListComponent>
        <hr />
        <LoginFormik></LoginFormik>
        <hr />
        <RegisterFormik></RegisterFormik>
        
    </div>
  );
}

export default App;
