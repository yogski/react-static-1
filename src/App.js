import React from 'react';
import './App.css';
import './style.css'
import Header from './components/header';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />

    </div>
  );
}

export default App;
