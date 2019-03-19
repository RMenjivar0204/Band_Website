import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Components/Layout/index';
import { Body } from './Components/Routes/index';
import './App.css';

class App extends Component {

  render() {
    return (
      <Fragment>

        <Header />

        <Body />

        <Footer />

      </Fragment>
    );
  }
}

export default App;
