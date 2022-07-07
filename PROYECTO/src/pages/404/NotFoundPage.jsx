import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function NotFoundPage() {

  const location = useLocation();
  const navigate = useNavigate();
  console.log('We are  in Route:', location.pathname)

  const goHome = () => {
    navigate('/')
  }

  return (
    <div>
        <h1>404 - Page not found</h1>
        <button onClick={goHome}>Go Home</button>
    </div>
  )
}
