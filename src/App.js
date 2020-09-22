import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import About from './component/About';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <About />
      </main>
    );
  }
}

export default App;
