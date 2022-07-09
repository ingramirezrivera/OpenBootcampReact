import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Notfoundpage from './pages/404/NotFoundPage'


function AppRoutingFinal() {

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        <Route component={Notfoundpage}></Route>
      </Switch>
    </Router>
      
  );
}

export default AppRoutingFinal;
