import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import About from './component/About';
import Education from './component/Education';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <About />
        <Education />
      </main>
    );
  }
}

export default App;
