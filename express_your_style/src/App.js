import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
