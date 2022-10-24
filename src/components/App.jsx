// import logo from './logo.svg';
import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import "../styles/Layout.css"

function App() {

  return (
      <div id="container">
        < Nav />
        < Home />
        < About />
        < Contact />
      </div>
  );
}

export default App;
