import React from 'react';
import './App.css';

// eslint-disable-next-line 
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Headerbar from './components/Headerbar/Headerbar.jsx';
import Home from './components/Home/Home.jsx';
import Gallery from './components/Gallery/Gallery.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  return (
    <div className="App">
      <Router>
        <Headerbar />
        <Switch>
					  <Route exact path="/" render={() => <Home />}/>
					  <Route exact path="/gallery" render={() => <Gallery />} />
        </Switch>
        <Footer />
			</Router>
    </div>
  );
}

export default App;
