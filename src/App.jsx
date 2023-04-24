import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header/Header';

const App = () => {
  return (
    <div className='container mx-auto p-4'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;