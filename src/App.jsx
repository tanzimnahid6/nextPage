import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div className='mx-10'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;