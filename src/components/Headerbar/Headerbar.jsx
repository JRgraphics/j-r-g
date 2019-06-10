import "./Headerbar.css";
import React from "react";

import Headerlink from "./Headerlink/Headerlink";

/*------------------
|      Images       |
-------------------*/

import ring from '../../assets/header_ring.png'
import jrLogo from '../../assets/JRlogo.png'

/*--------------------*/

class Headerbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkBoxMargin: '0px'
    };
    window.addEventListener('resize', this.setMargin);
  }

  componentDidMount = () => {
    this.setMargin();

    window.addEventListener('resize', this.setMargin);
  }

  setMargin = () => {
    console.log(this.refs['IC'].getBoundingClientRect().width);
    console.log(window.innerWidth * 0.05);
    const margin = (this.refs['IC'].getBoundingClientRect().width + window.innerWidth * 0.08).toString() + 'px';
    console.log(margin);
    this.setState({linkBoxMargin: margin});
  }

  render() { 
    return (
      <div className="headerbar noselect">
        <div>
          <div className="whiteBar">
            <div className="headerLinksTop" style={{left: this.state.linkBoxMargin}}>
              <Headerlink name="Home" link={'/'} />
              <Headerlink name="Gallery" link={'/gallery'}/>
            </div>
            <div className="headerLinksBottom" style={{left: this.state.linkBoxMargin}}>
              <Headerlink name="Projects" link="/projects" style={{marginLeft: '2vw', marginRight: '8vw'}} />
              <Headerlink name="About me" link="/aboutme" />
            </div>
          </div>
          <div ref={'IC'} className="imageContainer" onLoad={this.setMargin}>
            <img className="headerRing" src={ring} alt={'img'} />
            <img className="jrLogo" src={jrLogo} alt={'img'} />
          </div>
        </div>
    </div>
    );
  }
}
 
export default Headerbar;
