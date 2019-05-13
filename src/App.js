import React from 'react';
import Header from './App/components/Header';
import Footer from './App/components/Footer';
import ListOfShows from './App/components/main/ListOfShows';

function App() {
  return (
    <div className="App">
      <Header/>
      <ListOfShows/>
      <Footer/>
    </div>
  );
}

export default App;
