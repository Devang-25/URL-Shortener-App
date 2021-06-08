import React from 'react';
import './styles/App.css'
import Navbar from './components/Navbar'
import GetStarted from './components/GetStarted'
import Shortener from './components/Shortener'
import Footer from './components/Footer';
const App = () =>  {
  return (
    <div className="container">
     <Navbar/>
     <GetStarted/>
     <Shortener/>
     <Footer/>
    </div>
  );
}

export default App;
