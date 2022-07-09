import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskListComponent from './components/container/task_list';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';


function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged ?', logged)

  }, []);
  

  return (
      <Router>
        <div>
            <aside>
              <Link to='/'>| Home |</Link>
              <Link to='/about'>| About |</Link>
              <Link to='/about'>| Faqs |</Link>
              <Link to='/una404'>| Not exixting Route |</Link>
              <Link to='/login'>| Login |</Link>
              <Link to='/task/1'>| Task 1 |</Link>
              <Link to='/task/2'>| Task 2 |</Link>
            </aside>
        </div>
        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage logged={logged} /> }/>
            <Route exact path='/online-state' element={<StatePage/>}/>
            <Route path='/about' element= { <AboutPage /> } />
            <Route path='/profile' element={logged ? <ProfilePage /> : <Navigate to="/login" replace /> }/>
            <Route path='/tasks' element= { <TaskListComponent />} />
            <Route path='/task/:id' element= { <TaskDetailPage task={taskList}/> } />
            <Route path='/login' element= { logged ? <HomePage/> : <LoginPage/> } />

            {/* 404 Page not found */}
            <Route path="*" element= { <NotFoundPage /> }/>
          </Routes>

        </main>
        
      </Router>
  );
}

export default AppRoutingOne;
