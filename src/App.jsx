import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useNavigation } from 'react-router-dom';
import Loading from './components/Loading';
const App = () => {
  const navigation = useNavigation()
  if(navigation.state==='loading'){
    return <Loading></Loading>
}
  return (
    <div className='mx-10'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;