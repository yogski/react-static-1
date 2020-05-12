import React from 'react';
import './App.css';
import './style.css'
import Header from './components/header';
import SplashContainer from './components/splashContainer';
import ContentWrapper from './components/contentWrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <SplashContainer />
      <ContentWrapper />
    </div>
  );
}

export default App;
