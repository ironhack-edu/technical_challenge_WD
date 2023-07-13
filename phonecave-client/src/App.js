import React from 'react';
import PhoneList from './components/PhoneList';
import './App.css';

const App = () => {
  return (

<div className="app">
      <header>
        <h1>Phone Catalog</h1>
      </header>
      <div className="container">
        <PhoneList />
      </div>
    </div>
  );
};

export default App;