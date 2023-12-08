import React from 'react';
import './stylesheets/App.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
