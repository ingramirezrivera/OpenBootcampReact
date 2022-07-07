import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskListComponent from './components/container/task_list';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
      <Router>
        <div>
            <aside>
              <Link to='/'>| Home |</Link>
              <Link to='/about'>| About |</Link>
              <Link to='/about'>| Faqs |</Link>
              <Link to='/profile'>| Profile |</Link>
              <Link to='/una404'>| Not exixting Route |</Link>

            </aside>
        </div>
        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage /> }/>
            <Route path='/about' element= { <AboutPage /> } />
            <Route path='/profile' element= { <ProfilePage /> } />
            <Route path='/tasks' element= { <TaskListComponent />} />
            <Route path='/tasks/:id' element= { <TaskDetailPage/> } />

            {/* 404 Page not found */}
            <Route path="*" element= { <NotFoundPage /> }/>
          </Routes>

        </main>
        
      </Router>
  );
}

export default AppRoutingOne;
