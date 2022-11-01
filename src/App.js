import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
