import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage'
import Notfoundpage from './pages/404/NotFoundPage'
import DashBoardPage from './pages/dashboard/DashBoardPage';


function AppRoutingFinal() {

  //TODO Change to value false session storage
  let loggedIn = true;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
      {/* Redirections to protect our routes */}
      <Route exact path='/'>
        {
          loggedIn ? 
          <Redirect from='/' to='/dashboard' />
          :
          <Redirect from='/' to='/login'/>
        }
      </Route>
      {/* Dashboard Routes */}
      <Route exact path='/dashboard'>
        {
          loggedIn ? 
          <DashBoardPage />
          :
          <Redirect from='/' to='/login'/>
        }
      </Route>
      {/* Login Route */}
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/dashboard' component={DashBoardPage}/>
      <Route component={Notfoundpage}></Route>
      </Switch>
    </Router>
      
  );
}

export default AppRoutingFinal;
