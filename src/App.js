import React from 'react';

import './App.css';

// eslint-disable-next-line 
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Headerbar from './components/Headerbar/Headerbar.jsx';
import Home from './components/Home/Home.jsx';
import Gallery from './components/Gallery/Gallery.jsx'
import Aboutmecontent from './components/Aboutmecontent/Aboutmecontent.jsx';
import ZoomImage from './components/ZoomImage/ZoomImage.jsx';
import Footer from './components/Footer/Footer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomUrl: '',
      zoomUrlDT: '',
      rightCaller: 'false'
    }
  }

  componentDidMount = () => {
    console.log(Math.min(document.documentElement.clientHeight, window.screen.height, window.innerHeight));
  }

  handeOpenZoom = data => {
    console.log(data);
    this.setState({rightCaller: 'true', zoomUrl: data.zoomUrl, zoomUrlDT: data.zoomUrlDT});
  }

  closeZoom = () => {
    this.setState({rightCaller: 'false'});
  }

  render() { 
    return (
      <div className="App">
      <Router>
      <ZoomImage imgUrl={this.state.zoomUrl} imgUrlDT={this.state.zoomUrlDT} rightCaller={this.state.rightCaller} handleZoomClose={this.closeZoom} />
        <Headerbar />
        <Switch>
					  <Route exact path="/" render={() => <Home />}/>
					  <Route exact path="/gallery" render={() => <Gallery openZoomBox={this.handeOpenZoom} />} />
            <Route exact path="/projects" render={() => <Gallery />} />
            <Route exact path="/aboutme" render={() => <Aboutmecontent />} />
        </Switch>
        <Footer />
			</Router>
    </div>
    );
  }
}
 
export default App;