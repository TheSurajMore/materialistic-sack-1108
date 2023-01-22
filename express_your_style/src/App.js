import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Login/> */}
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
