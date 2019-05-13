import React from 'react';
import Header from './App/components/Header';
import Footer from './App/components/Footer';
import ListOfShows from './App/components/main/ListOfShows';
import { Switch, Route } from 'react-router-dom';
import ShowCard from './App/components/main/ShowCard';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ListOfShows}/>
        <Route path="show-details/:id" component={ShowCard}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
