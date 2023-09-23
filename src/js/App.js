import React from 'react'

import '../styles/index.css';
import Navbar from './component/Navbar';
import Jumbotron from './component/Jumbotron';
import Card from './component/Card';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer/>
    </>
  )
}

export default App
