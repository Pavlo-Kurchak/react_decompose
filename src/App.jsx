import React from 'react';
import './App.css';
import './components/Navigation/Navigation.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

const App = () => {
  return (
    <>
      <Welcome />
      <Header />
      <Article />
    </>
  );
};

export default App;
